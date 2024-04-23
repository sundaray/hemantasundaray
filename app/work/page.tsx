import { CustomLink } from "@/components/custom-link";
import { KodeKloudPosts } from "@/components/kodekloud-posts";
import { KodeKloudTestimonial } from "@/components/kodekloud-testimonial";
import { posts as kodekloudPosts } from "@/kodekloud/posts";

const playgroundItems = [
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

const revisedBlogItems = [
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

export default function WorkPage() {
  return (
    <div className="kodekloud container max-w-3xl">
      <h1 className="mb-4">Work</h1>
      <p className="mb-8 leading-7 text-slate-700">
        Since November 2022, I have been working as a freelance technical writer
        for <CustomLink href="https://kodekloud.com/">KodeKloud</CustomLink>, a
        leading platform for learning cloud and DevOps technologies. In this
        role, I primarily write about Linux, Bash scripting, Docker, and
        Kubernetes. To date, I&apos;ve written{" "}
        <span className="font-semibold">
          {kodekloudPosts.length} blog posts
        </span>{" "}
        on these subjects, which you can explore below:
      </p>
      <KodeKloudPosts />
      <p className="mb-8 leading-7 text-slate-700">
        In addition to the blog posts, I&apos;ve created write-ups for the
        following{" "}
        <CustomLink href="https://kodekloud.com/playgrounds/">
          KodeKloud playgrounds
        </CustomLink>
        . These interactive sandboxes provide hands-on practice for thousands of
        learners, allowing them to experiment with various cloud and DevOps
        technologies.
      </p>
      <ul className="ml-10 list-decimal leading-7 marker:text-slate-700 mb-8">
        {playgroundItems.map((item) => (
          <li key={item.href}>
            <CustomLink href={item.href}>{item.label}</CustomLink>
          </li>
        ))}
      </ul>
      <p className="mb-8 leading-7 text-slate-700">
        Furthermore, I have rewritten the following blog posts that were
        initially written by another technical writer. These revised articles
        aim to improve clarity, readability, and technical accuracy while
        maintaining the original author&apos; voice and intent. Please note that
        these rewritten articles are credited under the original author&apos;
        name to acknowledge their initial contribution.
      </p>
      <ul className="ml-10 list-decimal leading-7 marker:text-slate-700 mb-8">
        {revisedBlogItems.map((item) => (
          <li key={item.href}>
            <CustomLink href={item.href}>
              {item.label}
            </CustomLink>
          </li>
        ))}
      </ul>
      <KodeKloudTestimonial />
    </div>
  );
}
