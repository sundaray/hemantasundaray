import type { FormData } from "@/components/subscribe-form";
import { useToast } from "@/components/ui/use-toast";
import { SUBSCRIPTION_RESPONSE } from "@/lib/constants";
import "client-only";
import { useRouter } from "next/navigation";

type createSubscriberProps = {
  data: FormData;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  reset: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: ReturnType<typeof useRouter>;
  toast: ReturnType<typeof useToast>["toast"];
};

export async function createSubscriber({
  data,
  setError,
  reset,
  setIsLoading,
  router,
  toast,
}: createSubscriberProps) {
  setIsLoading(true);
  setError(null);

  try {
    // Attempt to subscribe the user
    const createSubscriberResponse = await fetch("/api/create-subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Subscription failed
    if (!createSubscriberResponse.ok) {
      toast({
        title: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.title,
        description: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.description,
      });
    }

    const subscribeResponseData = await createSubscriberResponse.json();

    // User already subscribed
    if (
      subscribeResponseData.message ===
      RESPONSE_MESSAGES.USER_ALREADY_SUBSCRIBED
    ) {
      setError(RESPONSE_MESSAGES.USER_ALREADY_SUBSCRIBED);
      reset();
      return;
    }

    // Email verification link was already sent
    if (
      subscribeResponseData.message ===
      RESPONSE_MESSAGES.EMAIL_VERIFICATION_LINK_ALREADY_SENT
    ) {
      setError(RESPONSE_MESSAGES.EMAIL_VERIFICATION_LINK_ALREADY_SENT);
      reset();
      return;
    }

    // New user or link has expired. Send email verification link
    if (
      subscribeResponseData.message ===
        RESPONSE_MESSAGES.NEW_SUBSCRIBE_USER_CREATED ||
      subscribeResponseData.message ===
        RESPONSE_MESSAGES.NEW_EMAIL_VERIFICATION_LINK_SENT
    ) {
      const { email, emailVerificationToken } = subscribeResponseData;

      const emailResponse = await fetch(
        "/api/send-subscription-email-verification-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, emailVerificationToken }),
        },
      );

      // Check if email was successfully sent
      if (!emailResponse.ok) {
        throw new Error(RESPONSE_MESSAGES.SUBSCRIPTION_FAILED);
      }

      const emailResponseData = await emailResponse.json();

      if (
        emailResponseData.message ===
        RESPONSE_MESSAGES.NEW_EMAIL_VERIFICATION_LINK_SENT
      ) {
        reset();
        router.replace("/subscribe/verify-email");
      }
    }
  } catch (error) {
    setError((error as Error).message);
  } finally {
    setIsLoading(false);
  }
}
