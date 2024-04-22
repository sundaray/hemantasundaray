import {KodeKloudPosts} from "@/components/kodekloud-posts"

export default function WorkPage() {
  return (
    <div className="container max-w-3xl">
      <h1 className="mb-4">Work</h1>
      <p className="text-slate-700">
        Since November 2022, I have been working with{" "}
        <a
          className="link-kodekloud-posts"
          href="https://kodekloud.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KodeKloud
        </a>{" "}
        as a freelance technical writer. My writing primarily covers topics such
        as Bash scripting, Docker, Kubernetes and Linux. So far, I've written x
        posts on these subjects.
      </p>
      <KodeKloudPosts />
    </div>
  );
}
