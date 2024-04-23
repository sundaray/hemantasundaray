import { Icons } from "@/components/icons";
import { formatDate } from "@/lib/utils";
import { KodeKloudPostsHook } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

type KodeKloudPostListProps = Pick<KodeKloudPostsHook, "posts">;

export function KodeKloudPostList({ posts }: KodeKloudPostListProps) {
  return (
    <motion.div layout="position" className="grid gap-10 sm:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.href}
          className="group relative overflow-hidden rounded-lg border bg-secondary"
        >
          {post.image && (
            <Image
              src={post.image}
              alt="Blog post cover image"
              width={1000}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGZhZmMiLz48L3N2Zz4="
            />
          )}
          {post.date && (
            <p className="p-4 text-sm text-slate-700">
              {formatDate(post.date)}
            </p>
          )}
          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:background-blur-md absolute inset-0 flex items-center justify-center text-sm font-medium text-primary opacity-0 transition-all group-hover:bg-white/90 group-hover:opacity-100"
          >
            Read
            <Icons.externalLink className="ml-1 inline-block size-4" />
          </a>
        </article>
      ))}
    </motion.div>
  );
}
