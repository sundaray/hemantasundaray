"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scrollspy"

export function TOC() {
  const { headings, activeId, currentIndex } = useScrollSpy()

  // If there are no headings, don't render anything
  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="scrollbar scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-slate-200 h-auto max-h-96 space-y-4 overflow-y-auto">
      <p className="font-semibold text-secondary-foreground">CONTENTS</p>
      <ul className="relative border-l-2">
        <motion.div
          className="absolute -left-0.5 top-2.5 h-4 w-0.5 bg-primary"
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
              level === 3
                ? "pl-8"
                : level === 4
                  ? "pl-12"
                  : level === 5
                    ? "pl-16"
                    : "pl-4",
              "py-2 text-sm hover:text-secondary-foreground",
              id === activeId ? "text-primary" : "text-muted-foreground"
            )}
          >
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
