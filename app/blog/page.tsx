import Link from "next/link"
import { SearchParams } from "@/types"

import { getPosts } from "@/lib/get-posts"
import { formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
} from "@/components/motion-components"
import { Pagination } from "@/components/pagination"
import { SearchBar } from "@/components/search-bar"
import { TagList } from "@/components/tag-list"

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { tag, currentPosts, totalPosts, currentPage, totalPages } =
    getPosts(searchParams)

  return (
    <MotionSection
      className="container max-w-3xl"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <MotionH1 className="mb-2 text-4xl font-bold" variants={variants}>
        Blog
      </MotionH1>
      <MotionH2
        className="mb-8 text-lg font-medium text-muted-foreground"
        variants={variants}
      >
        In-depth tutorials on full-stack web development.
      </MotionH2>
      <MotionDiv variants={variants}>
        <SearchBar />
        <TagList searchParams={searchParams} />
        {!tag && totalPosts === 0 && (
          <p className="text-red-600 duration-500 ease-in-out animate-in fade-in slide-in-from-left-2">
            No posts found.
          </p>
        )}
        {tag && (
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              {totalPosts} post{totalPosts !== 1 ? "s" : ""} tagged with &quot;
              {tag}&quot;
            </p>
            <Link
              href="/blog"
              className="rounded-md border border-lime-200 bg-lime-100 px-2 py-1 text-sm font-medium text-lime-900 hover:bg-lime-200"
            >
              Clear tag
            </Link>
          </div>
        )}

        <MotionSection className="space-y-4" layout="position">
          {currentPosts.map((post) => {
            return (
              <article
                key={post.slug}
                className="boder group relative rounded-md bg-secondary p-4"
              >
                <p className="mb-2 text-sm text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </p>
                <h2 className="mb-2">{post.title}</h2>
                <p className="mb-8 text-slate-700">{post.description}</p>
                <span className="text-sm text-primary transition-all">
                  Read more{" "}
                  <Icons.arrowRight className="inline-block size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <Link href={`blog/${post.slug}`} className="absolute inset-0">
                  <span className="sr-only">View article</span>
                </Link>
              </article>
            )
          })}
        </MotionSection>
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </MotionDiv>
    </MotionSection>
  )
}
