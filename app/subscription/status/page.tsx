import { Button } from "@/components/ui/button";
import { SUBSCRIPTION_STATUS_RESPONSE } from "@/lib/constants";
import { fetchSubscriptionStatus } from "@/lib/fetch-subscription-status";
import { SearchParams } from "@/types";
import Link from "next/link";

export default async function SubscriptionStatusPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const email = searchParams.email;
  const token = searchParams.token;

  const { message } = await fetchSubscriptionStatus(email!, token!);

  if (message === SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title) {
    return (
      <div className="container mx-auto grid place-items-center space-y-4">
        <h2 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title}
        </h2>
      </div>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title
  ) {
    return (
      <div className="container mx-auto grid place-items-center space-y-4">
        <h2 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title}
        </h2>
      </div>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title
  ) {
    return (
      <div className="container mx-auto grid place-items-center space-y-4">
        <h2 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title}
        </h2>
        <p className="text-center">Please subscribe again</p>
      </div>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title
  ) {
    return (
      <div className="container mx-auto grid place-items-center space-y-4">
        <h2 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title}
        </h2>
        <p className="text-center">Please subscribe again</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid place-items-center space-y-4">
      <h2 className="text-center">
        {SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_SUCCESS.title}
      </h2>
      <Button href="/blog" variant="link">
        Back to blog
      </Button>
    </div>
  );
}
