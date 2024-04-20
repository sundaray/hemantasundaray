import { Icons } from "@/components/icons";
import { MotionSection } from "@/components/motion-section";
import { Pagination } from "@/components/pagination";
import { SearchBar } from "@/components/search-bar";
import { TagList } from "@/components/tag-list";
import { usePosts } from "@/hooks/use-posts";
import { formatDate } from "@/lib/utils";
import { SearchParams } from "@/types";
import Link from "next/link";

export default function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { tag, currentPosts, totalPosts, currentPage, totalPages } =
    usePosts(searchParams);

  return (
    <div className="container my-16 max-w-2xl">
      <h1 className="mb-2 text-4xl font-bold">Blog</h1>
      <h2 className="mb-8 text-lg font-medium text-slate-500 text-slate-500">
        In-depth tutorials on full-stack web development.
      </h2>
      <SearchBar />
      <TagList searchParams={searchParams} />
      {!tag && totalPosts === 0 && (
        <p className="text-red-600">No posts found.</p>
      )}
      {tag && (
        <div className="mb-8 flex items-center justify-between">
          <p className="text-muted-foreground">
            {totalPosts} post{totalPosts !== 1 ? "s" : ""} tagged with {tag}
          </p>
          <Link
            href="/blog"
            className="rounded-md border border-lime-200 bg-lime-100 px-2 py-1 text-sm font-medium text-lime-800 hover:bg-lime-200"
          >
            Clear tag
          </Link>
        </div>
      )}

      <MotionSection>
        {currentPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative rounded-md bg-accent p-4 transition-all"
          >
            <p className="mb-1 text-sm text-muted-foreground">
              {formatDate(post.publishedAt)}
            </p>
            <h2 className="mb-2 text-2xl font-bold text-secondary-foreground">
              {post.title}
            </h2>
            <p className="mb-8 text-slate-700">{post.description}</p>
            <span className="text-sm text-primary">
              Read more{" "}
              <Icons.arrowRight className="inline-block size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <Link href={`blog/${post.slug}`} className="absolute inset-0">
              <span className="sr-only">View article</span>
            </Link>
          </article>
        ))}
      </MotionSection>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
