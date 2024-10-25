import Link from "next/link"
import { SearchParams } from "@/types"

import { getTags } from "@/lib/get-tags"
import { cn } from "@/lib/utils"

export function TagList({ searchParams }: { searchParams: SearchParams }) {
  const { currentTag, uniqueTags } = getTags(searchParams)

  return (
    <div className="scrollbar scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-slate-200 mb-4 flex h-12 gap-4 overflow-x-auto p-1">
      {uniqueTags.map((tag) => (
        <Link key={tag} href={`/blog?tag=${tag}`}>
          <span
            className={cn(
              "whitespace-nowrap rounded-md px-2 py-1 text-sm font-medium",
              currentTag === tag
                ? "bg-blue-600 text-white shadow"
                : "bg-blue-100 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            )}
          >
            {tag}
          </span>
        </Link>
      ))}
    </div>
  )
}
