"use client";

import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center text-lg">
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
                  item.href.startsWith(`/${segment}`)
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <Link
        href="/contact"
        className="text-sm font-medium text-muted-foreground"
      >
        Contact
      </Link>
    </div>
  );
}
