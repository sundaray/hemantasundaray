import "server-only"

import { render } from "@react-email/render";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "@/lib/aws-service-clients";

import { EmailProviderTemplate } from "@/components/email-provider-template";

export async function sendEmailLoginLink(email: string, url: string) {
  
    // Render the email using react-email
  const emailHtml = render(EmailProviderTemplate(url));

  // Create the email params
  const sendEmailCommand = new SendEmailCommand({
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Log in link for makeaudio (www.makeaudio.app)",
      },
    },
    Source: "makeaudio@makeaudio.app",
  });

  try {
    await sesClient.send(sendEmailCommand);
    return { message: "Email log in link sent successfully" };
  } catch (error) {
    return
      { message: "Failed to send email log in link" }
  }

  }