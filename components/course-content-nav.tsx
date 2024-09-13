import Link from "next/link"
import { NavItem as NavItemType } from "@/types"

import { ModeToggle } from "@/components/mode-toggle"
import { NavItem } from "@/components/nav-item"
import { UserAccountNav } from "@/components/user-account-nav"

type CourseContentNavProps = {
  items?: NavItemType[]
  children?: React.ReactNode
}

export function CourseContentNav({ items }: CourseContentNavProps) {
  return (
    <div className="container flex h-16 items-center justify-between border-b bg-background/50 backdrop-blur-xl">
      <Link
        href="/"
        className="flex items-center font-semibold text-secondary-foreground"
      >
        HKS
      </Link>
      {items?.length ? (
        <nav className="hidden rounded-full border px-4 py-2 shadow md:block">
          <ul className="flex space-x-4">
            {items.map((item) => (
              <NavItem key={item.title} href={item.href} title={item.title} />
            ))}
          </ul>
        </nav>
      ) : null}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <UserAccountNav />
      </div>
    </div>
  )
}
