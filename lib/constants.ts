enum SubscriptionResponseKey {
  SUBSCRIBER_CREATED = "SUBSCRIBER_CREATED",
  USER_ALREADY_SUBSCRIBED = "USER_ALREADY_SUBSCRIBED",
  EMAIL_VERIFICATION_LINK_ALREADY_SENT = "EMAIL_VERIFICATION_LINK_ALREADY_SENT",
  EMAIL_VERIFICATION_LINK_SENT = "EMAIL_VERIFICATION_LINK_SENT",
  SUBSCRIPTION_FAILED = "SUBSCRIPTION_FAILED",
}

type SubscriptionResponseMessage = {
  title: string;
  description: string;
};

export const SUBSCRIPTION_RESPONSE: Record<
  SubscriptionResponseKey,
  SubscriptionResponseMessage
> = {
  [SubscriptionResponseKey.SUBSCRIBER_CREATED]: {
    title: "Subscription Success",
    description: "User subscribed successfully.",
  },
  [SubscriptionResponseKey.USER_ALREADY_SUBSCRIBED]: {
    title: "Already Subscribed",
    description: "You are already subscribed to my mailing list.",
  },
  [SubscriptionResponseKey.EMAIL_VERIFICATION_LINK_ALREADY_SENT]: {
    title: "Email Verification Pending",
    description:
      "Email verification link already sent. Please check your inbox and verify your email.",
  },
  [SubscriptionResponseKey.EMAIL_VERIFICATION_LINK_SENT]: {
    title: "Email Verification Link Sent",
    description:
      "An email verification link has been sent to your email. Please check your inbox and verify your email.",
  },
  [SubscriptionResponseKey.SUBSCRIPTION_FAILED]: {
    title: "Subscription Failed",
    description: "Please try again.",
  },
};