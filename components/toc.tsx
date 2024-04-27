"use client";

import { Icons } from "@/components/icons";
import { useScrollSpy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

export function TOC() {
  const { headings, activeId } = useScrollSpy();

  return (
    <nav className="scrollbar scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-slate-200 h-auto max-h-96 space-y-4 overflow-y-auto">
      <p className="font-semibold text-slate-700">CONTENTS</p>
      <ul>
        {headings.map(({ id, level, text }) => (
          <li
            key={id}
            className={cn(
              `ml-${(level - 2) * 4}`,
              "group text-sm hover:text-secondary-foreground",
              id === activeId ? "text-primary" : "text-muted-foreground",
              level === 2 ? "py-2" : "py-1",
            )}
          >
            <a href={`#${id}`}>
              {level === 3 ? (
                <Icons.chevronRight className="inline-block size-3.5 text-muted-foreground group-hover:text-secondary-foreground" />
              ) : null}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
