import { buttonVariants } from "@/components/ui/button";
import { SUBSCRIPTION_STATUS_RESPONSE } from "@/lib/constants";
import { fetchSubscriptionStatus } from "@/lib/fetch-subscription-status";
import { cn } from "@/lib/utils";
import { SearchParams } from "@/types";
import Link from "next/link";

export default async function SubscriptionStatusPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const email = searchParams.email;
  const token = searchParams.token;

  if (!email || !token) {
    return (
      <h2 className="text-center text-red-600">
        {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title}
      </h2>
    );
  }

  const { message } = await fetchSubscriptionStatus(email!, token!);

  if (message === SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title) {
    return (
      <h2 className="text-center text-red-600">
        {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title}
      </h2>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title
  ) {
    return (
      <h2 className="text-center text-red-600">
        {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title}
      </h2>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title
  ) {
    return (
      <h2 className="text-center text-red-600">
        {SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title}
      </h2>
    );
  }

  if (
    message ===
    SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title
  ) {
    return (
      <h2 className="text-center text-red-600">
        {SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title}
      </h2>
    );
  }

  return (
    <div className="container mx-auto grid place-items-center space-y-4">
      <h2 className="text-center">
        {SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_SUCCESS.title}
      </h2>
      <Link
        href="/blog"
        className={cn(buttonVariants({ variant: "ghost" }), "text-slate-700")}
      >
        Back to blog
      </Link>
    </div>
  );
}
