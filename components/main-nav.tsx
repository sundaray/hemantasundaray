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
    <div className="flex h-16 items-center px-2.5 py-4 md:px-4">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center text-lg">
          HKS
        </Link>
      </div>
      {items?.length ? (
        <nav className="ml-6 mr-auto hidden md:block">
          <ul className="flex space-x-4">
            {items.map((item) => (
              <li
                key={item.title}
                className={cn(
                  "nav-link relative z-10 cursor-pointer py-0.5 font-medium text-muted-foreground transition-all hover:text-indigo-700 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "rounded-md bg-indigo-100 px-1 text-indigo-700"
                    : "text-muted-foreground",
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <div className="ml-auto flex items-center gap-4">
        <Link
          href="/contact"
          className="text-sm font-medium text-muted-foreground"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
