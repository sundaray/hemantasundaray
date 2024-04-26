import { SubscriberEmailVerificationLinkEmailTemplate } from "@/components/subscriber-email-verification-link-email-template";
import { sesClient } from "@/lib/aws-service-clients";
import { SUBSCRIPTION_RESPONSE } from "@/lib/constants";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, emailVerificationToken } = await request.json();

  // Render the email using react-email
  const emailHtml = render(
    SubscriberEmailVerificationLinkEmailTemplate({
      email,
      emailVerificationToken,
    }),
  );

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
        Data: "Verify your email",
      },
    },
    Source: "Hemanta@hemantasundaray.com",
  });

  // Send the email
  try {
    await sesClient.send(sendEmailCommand);
    return NextResponse.json(
      {
        message: SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.title,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED },
      { status: 500 },
    );
  }
}
