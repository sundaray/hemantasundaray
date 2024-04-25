"use client";

import { Comments } from "@/components/comments";
import { Icons } from "@/components/icons";
import { PageScrollProgress } from "@/components/page-scroll-progress";
import { SubscribeForm } from "@/components/subscribe-form";
import { TOC } from "@/components/toc";
// import Avatar from "@/app/(blog)/blog/images/avatar.jpg";
import { formatDate } from "@/lib/utils";
import { Frontmatter } from "@/types";
import Image from "next/image";
import Link from "next/link";

type BlogPostLayoutProps = {
  children: React.ReactNode;
  frontmatter: Frontmatter;
};

export function BlogPostLayout({ children, frontmatter }: BlogPostLayoutProps) {
  const { title, description, author, publishedAt, updatedAt, tags } =
    frontmatter;

  return (
    <>
      {/* <PageScrollProgress /> */}
      <div className="container max-w-6xl">
        <header>
          <div className="mb-8 flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="text-primary transition-all hover:underline hover:underline-offset-2"
            >
              Home
            </Link>
            <Icons.chevronRight className="size-4 text-muted-foreground" />
            <Link
              href="/blog"
              className="text-primary transition-all hover:underline hover:underline-offset-2"
            >
              Blog
            </Link>
            <Icons.chevronRight className="size-4 text-muted-foreground" />
          </div>
          <h1 className="mb-4 text-balance text-3xl font-bold lg:text-4xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-slate-700">{description}</p>
          <div className="flex items-center gap-4">
            {/* <Image
              src={Avatar}
              className="size-10 rounded-full object-cover object-center"
              alt="Author avatar"
            /> */}
            <div className="flex flex-col text-sm font-medium text-muted-foreground">
              <p>{author}</p>
              <p>Published on {formatDate(publishedAt)}</p>
            </div>
          </div>
        </header>

        <article className="prose max-w-[700px]">{children}</article>
        {/* <header>
          <div className="mb-8 flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="text-primary transition-all hover:underline hover:underline-offset-2"
            >
              Home
            </Link>
            <Icons.chevronRight className="size-4 text-muted-foreground" />
            <Link
              href="/blog"
              className="text-primary transition-all hover:underline hover:underline-offset-2"
            >
              Blog
            </Link>
            <Icons.chevronRight className="size-4 text-muted-foreground" />
          </div>
          <h1 className="mb-4 text-balance text-3xl font-bold lg:text-4xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-slate-700">{description}</p>
          <div className="flex items-center gap-4">
            <Image
            src={Avatar}
            className="size-10 rounded-full object-cover object-center"
            alt="Author avatar"
          />
            <div className="flex flex-col text-sm font-medium text-muted-foreground">
              <p>{author}</p>
              <p>Published on {formatDate(publishedAt)}</p>
            </div>
          </div>
        </header>
        <span className="w-full border-t" /> */}
        {/* <section className="flex self-center lg:justify-between">
          <article className="prose max-w-[700px]">
            {children}
            <div className="mb-4 flex items-center gap-2">
              <Icons.tags className="size-5 text-slate-700" />
              <div className="flex gap-2 text-sm font-medium">
                {tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-blue-600 hover:underline hover:underline-offset-2"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            {updatedAt && (
              <p className="w-fit rounded bg-blue-100 px-2 py-1 text-sm font-medium">
                Last updated on {formatDate(updatedAt)}
              </p>
            )}
          </article>
          <aside className="sticky top-24 hidden self-start lg:block">
            <TOC />
            <div className="mt-8 rounded-lg bg-secondary p-4">
              <h2 className="text-2xl font-semibold text-secondary-foreground">
                Subscribe
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Get notified when I publish a blog post.
              </p>
              <SubscribeForm />
            </div>
          </aside>
        </section> */}
        {/* <section className="rounded-lg bg-secondary py-8 lg:py-16">
          <Comments />
        </section> */}
      </div>
    </>
  );
}
