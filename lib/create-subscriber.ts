import type { FormData } from "@/components/subscribe-form";
import { useToast } from "@/components/ui/use-toast";
import { SUBSCRIPTION_RESPONSE } from "@/lib/constants";
import "client-only";

type createSubscriberProps = {
  data: FormData;
  reset: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  toast: ReturnType<typeof useToast>["toast"];
};

export async function createSubscriber({
  data,
  reset,
  setIsLoading,
  toast,
}: createSubscriberProps) {

  console.log("Toast: ", toast)
  setIsLoading(true);

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
        variant: "destructive",
        title: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.title,
        description: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.description,
      });
    }

    const createSubscriberResponseData = await createSubscriberResponse.json();

    // User already subscribed
    if (
      createSubscriberResponseData.message ===
      SUBSCRIPTION_RESPONSE.USER_ALREADY_SUBSCRIBED.title
    ) {
      toast({
        variant: "destructive",
        title: SUBSCRIPTION_RESPONSE.USER_ALREADY_SUBSCRIBED.title,
        description: SUBSCRIPTION_RESPONSE.USER_ALREADY_SUBSCRIBED.description,
      });

      reset();
      return;
    }

    // Email verification link was already sent
    if (
      createSubscriberResponseData.message ===
      SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_ALREADY_SENT.title
    ) {
      toast({
        variant: "destructive",
        title: SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_ALREADY_SENT.title,
        description:
          SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_ALREADY_SENT
            .description,
      });
      reset();
      return;
    }

    // Subscriber created, send an email verification link
    if (
      createSubscriberResponseData.message ===
      SUBSCRIPTION_RESPONSE.SUBSCRIBER_DOCUMENT_CREATED.title
    ) {
      const { email, emailVerificationToken } = createSubscriberResponseData;

      const emailResponseOne = await fetch(
        "/api/send-subscriber-email-verification-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, emailVerificationToken }),
        },
      );

      if (!emailResponseOne.ok) {
        toast({
          variant: "destructive",
          title: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.title,
          description: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.description,
        });
      }

      const emailResponseData = await emailResponseOne.json();

      if (
        emailResponseData.message ===
        SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.title
      ) {
        toast({
          title: SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.title,
          description:
            SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.description,
        });
        reset();
        return;
      }
    }

    // Verification link expired, send an email verification link
    if (
      createSubscriberResponseData.message ===
      SUBSCRIPTION_RESPONSE.SEND_EMAIL_VERIFICATION_LINK.title
    ) {
      const { email, emailVerificationToken } = createSubscriberResponseData;

      const emailResponseTwo = await fetch(
        "/api/send-subscriber-email-verification-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, emailVerificationToken }),
        },
      );

      if (!emailResponseTwo.ok) {
        toast({
          variant: "destructive",
          title: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.title,
          description: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.description,
        });
      }

      const emailResponseTwoData = await emailResponseTwo.json();

      if (
        emailResponseTwoData.message ===
        SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.title
      ) {
        toast({
          title: SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.title,
          description:
            SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_SENT.description,
        });
        reset();
        return;
      }
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.title,
      description: SUBSCRIPTION_RESPONSE.SUBSCRIPTION_FAILED.description,
    });
  } finally {
    setIsLoading(false);
  }
}
