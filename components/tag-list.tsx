import { useTags } from "@/hooks/use-tags";
import { cn } from "@/lib/utils";
import { SearchParams } from "@/types";
import Link from "next/link";

export function TagList({ searchParams }: { searchParams: SearchParams }) {
  const { currentTag, uniqueTags } = useTags(searchParams);

  return (
    <div className="scrollbar scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-slate-200 mb-4 flex h-12 gap-4 overflow-x-auto p-1">
      {uniqueTags.map((tag) => (
        <Link key={tag} href={`/blog?tag=${tag}`}>
          <span
            className={cn(
              "whitespace-nowrap rounded-md px-2 py-1 text-sm font-medium",
              currentTag === tag
                ? "border border-blue-600 bg-blue-600 text-white shadow"
                : "border border-blue-200 bg-blue-100 text-blue-600 transition-all hover:bg-blue-200",
            )}
          >
            {tag}
          </span>
        </Link>
      ))}
    </div>
  );
}
