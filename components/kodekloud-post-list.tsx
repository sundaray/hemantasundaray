import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";
import Image from "next/image";

interface KodeKloudPostListProps {
  posts: {
    id: number;
    image: string;
    date: string;
    href: string;
  }[];
}

export function KodeKloudPostList({ posts }: KodeKloudPostListProps) {
  const sortedPosts = posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {sortedPosts.map((post, index) => (
        <article key={post.href} className="relative z-0 space-y-2">
          {post.image && (
            <Image
              src={post.image}
              alt="Blog post image"
              width={804}
              height={452}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-lg"
              priority={index <= 1}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGZhZmMiLz48L3N2Zz4="
            />
          )}
          {post.date && (
            <p className="text-sm text-slate-700">{formatDate(post.date)}</p>
          )}
          <a
            href={post.href}
            target="_blank"
            className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span className="sr-only">Read</span>
          </a>
        </article>
      ))}
    </div>
  );
}
