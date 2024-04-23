import { CustomLink } from "@/components/custom-link";
import { KodeKloudPosts } from "@/components/kodekloud-posts";
import { posts as kodekloudPosts } from "@/kodekloud/posts";

const linkItems = [
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

export default function WorkPage() {
  return (
    <div className="kodekloud container max-w-3xl">
      <h1 className="mb-4">Work</h1>
      <p className="mb-8 leading-7 text-slate-700">
        I have been working with{" "}
        <CustomLink href="https://kodekloud.com/">KodeKloud</CustomLink> as a
        freelance technical writer since November 2022. In this role, I
        primarily write about Linux, Bash scripting, Docker, and Kubernetes. To
        date, I&apos;ve written {kodekloudPosts.length} blog posts on these
        subjects, which you can explore below:
      </p>
      <KodeKloudPosts />
      <p className="mb-8 leading-7 text-slate-700">
        In addition to the blog posts, I&apos;ve created write-ups for the
        following KodeKloud playgrounds. These interactive sandboxes
        provide hands-on practice for thousands of learners, allowing them to
        experiment with various cloud and DevOps technologies.
      </p>
      <ul className="ml-10 list-decimal leading-7">
        {linkItems.map((item) => (
          <li key={item.href}>
            <CustomLink href={item.href}>{item.label}</CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
