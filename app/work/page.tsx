import { KodeKloudPosts } from "@/components/kodekloud-posts";
import { posts as kodekloudPosts } from "@/kodekloud/posts";

export default function WorkPage() {
  return (
    <div className="kodekloud container max-w-3xl">
      <h1 className="mb-4">Work</h1>
      <p className="mb-8">
        I have been working with{" "}
        <a
          href="https://kodekloud.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KodeKloud
        </a>{" "}
        as a freelance technical writer since November 2022. In this role, I
        primarily write about Linux, Bash scripting, Docker, and Kubernetes. To
        date, I&apos;ve written {kodekloudPosts.length} blog posts on these
        subjects, which you can explore below:
      </p>
      <KodeKloudPosts />
      <p>
        In addition to the blog posts, I&apos;ve created write-ups for
        KodeKloud&apos;s playgrounds. These interactive sandboxes provide
        hands-on practice for thousands of learners, allowing them to experiment
        with various cloud and DevOps technologies.
      </p>
    </div>
  );
}
