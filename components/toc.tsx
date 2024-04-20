"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scrollspy";

export function TOC() {
  const { headings } = useScrollSpy();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
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
        <h2 className="font-semibold">CONTENTS</h2>
      </header>
      <ul>
        {headings.map(({ id, level, text }) => (
          <li
            key={id}
            className={cn(
              `ml-${(level - 2) * 4}`,
              "text-sm font-medium text-zinc-600 hover:text-primary group",
              level === 2 ? "py-2" : "py-1"
            )}
          >
            <a href={`#${id}`} onClick={(e) => handleClick(e, id)}>
              {level === 3 ? (
                <Icons.chevronRight className="size-3.5 inline-block text-zinc-400 group-hover:text-zinc-600" />
              ) : null}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
