"use client";

import { Icons } from "@/components/icons";
import {
  subscriptionStatus,
  RESPONSE_MESSAGES,
} from "@/lib/subscription-status";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function StatusPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initializing as true since we want the spinner to show on component mount.
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      if (email && token) {
        await subscriptionStatus({ setMessage, setIsLoading, email, token });
      }
    };
    fetchSubscriptionStatus();
  }, [email, token]);

  const messageClass = clsx({
    "text-red-600": message !== RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE,
  });

  if (message === RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE) {
    return (
      <div className="auth-page-message-layout">
        <div className="mx-auto flex items-center justify-center space-x-2">
          <Icons.subscribed className="h-6 w-6 text-neutral-900" />
          <h2>Subscribed</h2>
        </div>
        <div>
          <p className="text-center">Thanks for subscribing.</p>
          <p className="text-center">
            I'll keep you updated on the course progress.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 mt-32 flex justify-center">
      {isLoading ? (
        <Icons.spinner className="h-4 w-4 animate-spin text-neutral-700" />
      ) : (
        <div className="mx-auto flex items-center justify-center space-x-2">
          {message !== RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE && (
            <Icons.alertTriangle className="h-4 w-4 text-red-600" />
          )}
          <p className={clsx("text-center", messageClass)}>{message}</p>
        </div>
      )}
    </div>
  );
}
