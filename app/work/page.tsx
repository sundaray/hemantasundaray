import { CustomLink } from "@/components/custom-link";
import { KodeKloudPosts } from "@/components/kodekloud-posts";
import { KodeKloudTestimonial } from "@/components/kodekloud-testimonial";
import { MotionDiv } from "@/components/motion-components";
import { MotionSection } from "@/components/motion-components";
import { MotionH1 } from "@/components/motion-components";
import { posts as kodekloudPosts } from "@/kodekloud/posts";
import { playgroundItems } from "@/lib/constants";
import { revisedBlogItems } from "@/lib/constants";

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function WorkPage() {
  return (
    <MotionSection
      className="container max-w-3xl"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <MotionH1 className="mb-4" variants={variants}>
        Work
      </MotionH1>
      <MotionDiv variants={variants}>
        <p className="mb-8 leading-7">
          Since November 2022, I have been working as a freelance technical
          writer for{" "}
          <CustomLink href="https://kodekloud.com/">KodeKloud</CustomLink>, an
          online DevOps learning platform. In this role, I primarily write about
          Linux, Bash scripting, Docker, and Kubernetes. To date, I&apos;ve
          written{" "}
          <span className="font-semibold">
            {kodekloudPosts.length} blog posts
          </span>{" "}
          on these subjects, which you can explore below:
        </p>
        <KodeKloudPosts />
        <p className="mb-8 leading-7">
          In addition to the blog posts, I&apos;ve created write-ups for the
          following{" "}
          <CustomLink href="https://kodekloud.com/playgrounds/">
            KodeKloud playgrounds
          </CustomLink>
          . These interactive sandboxes provide hands-on practice for thousands
          of learners, allowing them to experiment with various cloud and DevOps
          technologies.
        </p>
        <ul className="mb-8 ml-10 list-decimal leading-7 marker:text-slate-700 dark:marker:text-slate-400">
          {playgroundItems.map((item) => (
            <li key={item.href}>
              <CustomLink href={item.href}>{item.label}</CustomLink>
            </li>
          ))}
        </ul>
        <p className="mb-8 leading-7 text-slate-700">
          Furthermore, I&apos;ve rewritten the following blog posts that were
          initially written by another technical writer. These revised articles
          aim to improve clarity, readability, and technical accuracy while
          maintaining the original author&apos;s voice and intent. Please note
          that these rewritten articles are credited under the original
          author&apos;s name to acknowledge his initial contribution.
        </p>
        <ul className="mb-16 ml-10 list-decimal leading-7 marker:text-slate-700 dark:marker:text-slate-400">
          {revisedBlogItems.map((item) => (
            <li key={item.href}>
              <CustomLink href={item.href}>{item.label}</CustomLink>
            </li>
          ))}
        </ul>
        <KodeKloudTestimonial />
      </MotionDiv>
    </MotionSection>
  );
}
