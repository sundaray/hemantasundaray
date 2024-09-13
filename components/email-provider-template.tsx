import * as React from "react";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";


export function EmailProviderTemplate(url: string) {
  return (
    <Html>
      <Tailwind>
        <Text className="text-base font-medium text-zinc-900">Hey,</Text>
        <Text className="text-base font-medium text-zinc-900">
          Click the link below to log in to your account.
        </Text>
        <Button
          href={url}
          className="rounded px-4 py-2 bg-indigo-700 text-white text-base font-medium"
        >
          Log in
        </Button>
        <Text className="text-sm font-medium text-zinc-500">
          If you did not try to log in to your account, you can safely ignore
          this email.
        </Text>
      </Tailwind>
    </Html>
  );
}