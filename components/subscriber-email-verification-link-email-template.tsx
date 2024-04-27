import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";
import * as React from "react";

interface SubscriberEmailVerificationLinkEmailTemplateProps {
  email: string;
  emailVerificationToken: string;
}

export function SubscriberEmailVerificationLinkEmailTemplate({
  email,
  emailVerificationToken,
}: SubscriberEmailVerificationLinkEmailTemplateProps) {
  //   const fullLink = `https://hemantasundaray.com/subscription/status?email=${encodeURIComponent(
  //     email,
  //   )}&token=${emailVerificationToken}`;

  const fullLink = `http://localhost:3000/subscription/status?email=${encodeURIComponent(email)}&token=${emailVerificationToken}`;

  return (
    <Html>
      <Tailwind>
        <Text className="text-base font-medium">Hey,</Text>
        <Text className="text-base font-medium">
          Please click on the link below to verify your email.
        </Text>
        <Button
          href={fullLink}
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          Verify
        </Button>
        <Text className="text-base font-medium">
          If you didn&apos;t request to subscribe to{" "}
          <Link
            href="https://www.hemantasundaray.com"
            className="text-base font-medium text-primary"
          >
            hemantasundaray.com
          </Link>
          , just ignore this email.
        </Text>
      </Tailwind>
    </Html>
  );
}
