import { Dispatch, SetStateAction } from "react";

export const RESPONSE_MESSAGES = {
  INVALID_EMAIL: "Invalid email",
  INVALID_TOKEN: "Invalid token",
  LINK_EXPIRED: "Link expired. Please register again.",
  SUBSCRIPTION_COMPLETE:
    "Subscribed! I'll keep you updated on the course progress.",
  VERIFICATION_FAILED: "Verification failed. Please refresh the page.",
};

interface SubscriptionStatusParams {
  email: string;
  token: string;
  setMessage: Dispatch<SetStateAction<string | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export async function subscriptionStatus({
  email,
  token,
  setMessage,
  setIsLoading,
}: SubscriptionStatusParams) {
  try {
    const response = await fetch(
      "/api/verify-subscription-email-verification-link",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, token }),
      },
    );

    const data = await response.json();

    if (data.message === RESPONSE_MESSAGES.INVALID_EMAIL) {
      setMessage(RESPONSE_MESSAGES.INVALID_EMAIL);
    } else if (data.message === RESPONSE_MESSAGES.INVALID_TOKEN) {
      setMessage(RESPONSE_MESSAGES.INVALID_TOKEN);
    } else if (data.message === RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE) {
      setMessage(RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE);
    } else {
      setMessage(RESPONSE_MESSAGES.VERIFICATION_FAILED);
    }
  } catch (error) {
    setMessage(RESPONSE_MESSAGES.VERIFICATION_FAILED);
  } finally {
    setIsLoading(false);
  }
}
