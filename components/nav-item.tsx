"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type NavItemProps = {
  href: string
  title: string
}

export function NavItem({ href, title }: NavItemProps) {
  const pathname = usePathname()

  return (
    <li
      className={cn(
        "cursor-pointer font-medium text-muted-foreground transition-all hover:text-secondary-foreground sm:text-sm",
        href === pathname && "text-secondary-foreground"
      )}
    >
      <Link href={href}>{title}</Link>
    </li>
  )
}
