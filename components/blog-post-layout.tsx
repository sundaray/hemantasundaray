"use client";

import { Icons } from "@/components/icons";
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
  console.log("Frontmatter: ", frontmatter);

  const { title, description, author, publishedAt, updatedAt, tags } =
    frontmatter;

  return (
    <div className="container flex max-w-6xl flex-col gap-16">
      <header className="border-b py-16">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-primary hover:underline hover:underline-offset-4"
          >
            Home
          </Link>
          <Icons.chevronRight className="size-4 text-muted-foreground" />
          <Link
            href="/blog"
            className="text-primary hover:underline hover:underline-offset-2"
          >
            Blog
          </Link>
          <Icons.chevronRight className="size-4 text-muted-foreground" />
        </div>
        <h1 className="text-balance text-3xl font-bold lg:text-4xl">{title}</h1>
        <p className="text-lg text-slate-700">{description}</p>
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
      <section className="flex justify-center gap-8 lg:justify-between">
        <article className="prose max-w-[720px]">
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
        <aside className="sticky top-24 hidden max-w-[250px] self-start lg:block">
          <TOC />
        </aside>
      </section>
    </div>
  );
}
