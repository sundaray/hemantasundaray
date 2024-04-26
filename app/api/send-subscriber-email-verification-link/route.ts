import { SubscriberEmailVerificationLinkEmailTemplate } from "@/components/subscriber-email-verification-link-email-template";
import { SUBSCRIPTION_RESPONSE } from "@/lib/constants";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, emailVerificationToken } = await request.json();

    await resend.emails.send({
      from: "Hemanta@hemantasundaray.com",
      to: [email],
      subject: "Verify your email",
      react: SubscriberEmailVerificationLinkEmailTemplate({
        email,
        emailVerificationToken,
      }),
    });

    return NextResponse.json({
      message: SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.title,
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
