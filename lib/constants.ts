enum SubscriptionResponseKey {
  SUBSCRIBER_DOCUMENT_CREATED = "SUBSCRIBER_DOCUMENT_CREATED",
  USER_ALREADY_SUBSCRIBED = "USER_ALREADY_SUBSCRIBED",
  EMAIL_VERIFICATION_LINK_ALREADY_SENT = "EMAIL_VERIFICATION_LINK_ALREADY_SENT",
  SEND_EMAIL_VERIFICATION_LINK = "SEND_EMAIL_VERIFICATION_LINK",
  EMAIL_VERIFICATION_LINK_SENT = "EMAIL_VERIFICATION_LINK_SENT",
  SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS",
  SUBSCRIPTION_FAILED = "SUBSCRIPTION_FAILED",
}

enum SubscriptionStatusResponseKey {
  INVALID_EMAIL = "INVALID_EMAIL",
  INVALID_EMAIL_VERIFICATION_TOKEN = "INVALID_EMAIL_VERIFICATION_TOKEN",
  INVALID_EMAIL_VERIFICATION_LINK = "INVALID_EMAIL_VERIFICATION_LINK",
  SUBSCRIPTION_STATUS_CHECK_FAILED = "SUBSCRIPTION_STATUS_CHECK_FAILED",
  SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS",
}

type SubscriptionResponseMessage = {
  title: string;
  description?: string;
};

type SubscriptionStatusResponseMessage = {
  title: string;
  description?: string;
};

export const SUBSCRIPTION_RESPONSE: Record<
  SubscriptionResponseKey,
  SubscriptionResponseMessage
> = {
  [SubscriptionResponseKey.SUBSCRIBER_DOCUMENT_CREATED]: {
    title: "Subscriber Document Created",
    description: "Subscriber document created in the firestore database.",
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
  [SubscriptionResponseKey.SEND_EMAIL_VERIFICATION_LINK]: {
    title: "Send Email Verification Link",
  },
  [SubscriptionResponseKey.EMAIL_VERIFICATION_LINK_SENT]: {
    title: "Email Verification Link Sent",
    description:
      "An email verification link has been sent to your email. Please check your inbox and verify your email.",
  },
  [SubscriptionResponseKey.SUBSCRIPTION_SUCCESS]: {
    title: "Subscription Successful",
  },
  [SubscriptionResponseKey.SUBSCRIPTION_FAILED]: {
    title: "Subscription Failed",
    description: "Please try again.",
  },
};

export const SUBSCRIPTION_STATUS_RESPONSE: Record<
  SubscriptionStatusResponseKey,
  SubscriptionStatusResponseMessage
> = {
  [SubscriptionStatusResponseKey.INVALID_EMAIL]: {
    title: "Invalid Email",
  },
  [SubscriptionStatusResponseKey.INVALID_EMAIL_VERIFICATION_TOKEN]: {
    title: "Invalid Token",
  },
  [SubscriptionStatusResponseKey.INVALID_EMAIL_VERIFICATION_LINK]: {
    title: "Invalid Link",
  },
  [SubscriptionStatusResponseKey.SUBSCRIPTION_STATUS_CHECK_FAILED]: {
    title: "Subscription Failed",
  },
  [SubscriptionStatusResponseKey.SUBSCRIPTION_SUCCESS]: {
    title: "Subscription Successful",
  },
};


export const playgroundItems = [
  { href: "https://kodekloud.com/playgrounds/playground-chef", label: "Chef" },
  {
    href: "https://kodekloud.com/playgrounds/playground-saltstack",
    label: "SaltStack",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-arch-linux",
    label: "Arch Linux",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-alpine-linux",
    label: "Alpine Linux",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-rocky-linux",
    label: "Rocky Linux",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-centos-stream-8",
    label: "Centos Stream 8",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-ubuntu-18-04",
    label: "Linux Ubuntu 18.04",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-ubuntu-22-04",
    label: "Linux Ubuntu 22.04",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-consul-datacenter-3-node",
    label: "Consul datacenter 3-node",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-jsonnet-tanka",
    label: "Jsonnet Tanka",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-gvisor",
    label: "Kubernetes with gVisor",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-kubernetes-with-calic",
    label: "Kubernetes with Calico",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-kubernetes-with-kata-containers",
    label: "Kubernetes with Kata containers",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-mongodb",
    label: "MongoDB",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-redis",
    label: "Redis",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-nodejs",
    label: "Node.js",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-postgresql",
    label: "PostgreSQL",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-jupyter",
    label: "JupyterLab",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-terraform",
    label: "Terraform",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-terragrunt",
    label: "Terragrunt",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-terraform-aws",
    label: "Terraform + AWS",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-nagios",
    label: "Nagios",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-istio",
    label: "Istio",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-linkerd",
    label: "Linkerd",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-containerd",
    label: "Containerd",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-buildpacks-io",
    label: "Buildpacks",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-ci-cd",
    label: "CI CD playground",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-prometheus-with-helm",
    label: "Prometheus with Helm",
  },
];

export const revisedBlogItems = [
  {
    href: "https://kodekloud.com/blog/containerization/",
    label: "What Is Containerization?",
  },
  {
    href: "https://kodekloud.com/blog/top-developer-tools/",
    label: "Top 10 Developer Tools",
  },
  {
    href: "https://kodekloud.com/blog/devops-cloud-coding/",
    label: "Does DevOps or Cloud Engineer Need Coding?",
  },
  {
    href: "https://kodekloud.com/blog/how-to-become-a-devops-engineer/",
    label: "How to Become a DevOps Engineer: Your 6-Step Guide",
  },
  {
    href: "https://kodekloud.com/blog/gitops-deployment-advantages/",
    label: "What Is GitOps? Deployment Strategies and Advantages Explained",
  },
  {
    href: "https://kodekloud.com/blog/cloud-computing/",
    label: "What Is Cloud Computing?",
  },
];
