"use client";

import { Icons } from "@/components/icons";
import { useScrollSpy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

export function TOC() {
  const { headings } = useScrollSpy();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      const targetScrollPosition =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="space-y-4">
      <header>
        <h2 className="font-semibold text-slate-700">CONTENTS</h2>
      </header>
      <ul>
        {headings.map(({ id, level, text }) => (
          <li
            key={id}
            className={cn(
              `ml-${(level - 2) * 4}`,
              "group text-sm font-medium text-muted-foreground hover:text-slate-700",
              level === 2 ? "py-2" : "py-1",
            )}
          >
            <a href={`#${id}`} onClick={(e) => handleClick(e, id)}>
              {level === 3 ? (
                <Icons.chevronRight className="inline-block size-3.5 text-slate-400 group-hover:text-muted-foreground" />
              ) : null}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
