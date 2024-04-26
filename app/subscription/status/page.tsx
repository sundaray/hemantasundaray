import { SUBSCRIPTION_STATUS_RESPONSE } from "@/lib/constants";
import { fetchSubscriptionStatus } from "@/lib/fetch-subscription-status";
import { SearchParams } from "@/types";
import Link from "next/link";

export async function SubscriptionStatusPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const email = searchParams.email;
  const token = searchParams.token;

  const { message } = await fetchSubscriptionStatus(email!, token!);

  if (message === SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title) {
    return (
      <div className="container mx-auto space-y-4">
        <h1 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title}
        </h1>
        <p className="text-center">Please subscribe again</p>
      </div>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title
  ) {
    return (
      <div className="container mx-auto space-y-4">
        <h1 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title}
        </h1>
        <p className="text-center">Please subscribe again</p>
      </div>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title
  ) {
    return (
      <div className="container mx-auto space-y-4">
        <h1 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title}
        </h1>
        <p className="text-center">Please subscribe again</p>
      </div>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title
  ) {
    return (
      <div className="container mx-auto space-y-4">
        <h1 className="text-center text-red-600">
          {SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title}
        </h1>
        <p className="text-center">Please subscribe again</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-4">
      <h1 className="text-center">
        {SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_SUCCESS.title}
      </h1>
      <Link
        href="/blog"
        className="rounded-md bg-secondary px-2 py-1 text-secondary-foreground hover:bg-border"
      >
        Back to blog
      </Link>
    </div>
  );
}
