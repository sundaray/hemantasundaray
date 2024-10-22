"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"
import { useMotionValueEvent, useScroll } from "framer-motion"

import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

interface MainNavProps {
  items?: NavItem[]
  children?: React.ReactNode
}

export function MainNav({ items }: MainNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true)
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false)
    }
  })

  return (
    <div
      className={cn(
        "container flex h-16 items-center justify-between transition-all",
        isScrolled
          ? "border-b bg-background/50 backdrop-blur-xl"
          : "bg-background/0"
      )}
    >
      <div className="flex items-center space-x-2">
        <MobileNav />
        <Link
          href="/"
          className="flex items-center font-semibold text-secondary-foreground"
        >
          HKS
        </Link>
      </div>
      {items?.length ? (
        <nav className="hidden rounded-full border px-4 py-2 shadow md:block">
          <ul className="flex space-x-4">
            {items.map((item) => (
              <li
                key={item.title}
                className={cn(
                  "cursor-pointer font-medium text-muted-foreground transition-all hover:text-secondary-foreground sm:text-sm",
                  item.href === pathname && "text-secondary-foreground"
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <ModeToggle />
    </div>
  )
}
