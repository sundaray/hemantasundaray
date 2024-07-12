"use client"

import Image from "next/image"
import Link from "next/link"
import { Frontmatter } from "@/types"

import { formatDate } from "@/lib/utils"
import { Comments } from "@/components/comments"
import { Icons } from "@/components/icons"
import { PageScrollProgress } from "@/components/page-scroll-progress"
import { TOC } from "@/components/toc"
import Avatar from "@/app/blog/images/avatar.jpg"

type BlogPostLayoutProps = {
  children: React.ReactNode
  frontmatter: Frontmatter
}

export function BlogPostLayout({ children, frontmatter }: BlogPostLayoutProps) {
  const { title, description, author, publishedAt, updatedAt, tags } =
    frontmatter

  console.log("Published at: ", publishedAt)

  return (
    <>
      {/* <PageScrollProgress /> */}
      <div className="container flex max-w-6xl flex-col gap-16">
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
          <p className="fpont-medium mb-8 text-lg text-slate-700">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={Avatar}
              className="size-10 rounded-full object-cover object-center"
              alt="Author avatar"
            />
            <div className="flex flex-col text-sm">
              <p className="text-muted-foreground">{author}</p>
              <p className="text-muted-foreground">
                Published on {formatDate(publishedAt)}
              </p>
            </div>
          </div>
        </header>
        <span className="w-full border-t" />
        <section className="grid grid-cols-16">
          <article className="prose col-span-full col-start-1 lg:col-end-10">
            {children}
            <div className="mb-8 mt-16 flex items-center gap-2">
              <Icons.tags className="size-5 text-muted-foreground" />
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
              <p className="w-fit rounded bg-secondary px-2 py-1 text-sm font-medium">
                Last updated on {formatDate(updatedAt)}
              </p>
            )}
          </article>
          <aside className="sticky top-24 col-span-full col-start-12 hidden self-start lg:block">
            <TOC />
            {/* <div className="mt-8 rounded-lg bg-secondary p-6">
              <h2 className="text-2xl font-semibold text-secondary-foreground">
                Subscribe
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Get notified when I publish a blog post.
              </p>
            </div> */}
          </aside>
        </section>
        <section className="rounded-lg bg-secondary p-4 lg:p-16">
          <Comments />
        </section>
      </div>
    </>
  )
}
