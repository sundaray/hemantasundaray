"use client";

import { useScrollSpy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TOC() {
  const { headings, activeId, currentIndex } = useScrollSpy();

  return (
    <nav className="scrollbar scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-slate-200 h-auto max-h-96 space-y-4 overflow-y-auto">
      <p className="font-semibold text-slate-700">CONTENTS</p>
      <ul className="relative border-l">
        <motion.div
          className="absolute left-0 top-2.5 h-4 w-0.5 bg-primary"
          animate={{
            y: currentIndex * 36,
          }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
          }}
        />
        {headings.map(({ id, level, text }) => (
          <li
            key={id}
            className={cn(
              level === 3 ? "pl-8" : "pl-4",
              "py-2 text-sm hover:text-secondary-foreground",
              id === activeId ? "text-primary" : "text-muted-foreground",
            )}
          >
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
