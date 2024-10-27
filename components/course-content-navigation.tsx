"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import { Section } from "@/lib/courses"
import { Icons } from "@/components/icons"

type CourseContentNavigationProps = {
  sections: Section[]
  courseSlug: string
  currentSectionSlug: string
}

export function CourseContentNavigation({
  sections,
  courseSlug,
  currentSectionSlug,
}: CourseContentNavigationProps) {
  const currentSectionParts = useMemo(() => {
    return currentSectionSlug.split("/")
  }, [currentSectionSlug])

  const [userToggledSections, setUserToggledSections] = useState<Set<string>>(
    new Set()
  )

  const toggleSection = (slug: string) => {
    setUserToggledSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(slug)) {
        newSet.delete(slug)
      } else {
        newSet.add(slug)
      }
      return newSet
    })
  }

  const isExpanded = (slug: string) => {
    const slugParts = slug.split("/")
    const isInCurrentPath =
      currentSectionParts.slice(0, slugParts.length).join("/") === slug
    const isUserToggled = userToggledSections.has(slug)
    return isInCurrentPath ? !isUserToggled : isUserToggled
  }

  const renderSections = (sections: Section[], parentSlug = "") => (
    <ul className="space-y-1">
      {sections.map((section) => {
        const fullSlug = parentSlug
          ? `${parentSlug}/${section.slug}`
          : section.slug
        const expanded = isExpanded(fullSlug)
        const hasSubsections =
          section.subsections && section.subsections.length > 0
        const isActive = currentSectionSlug.startsWith(fullSlug)

        return (
          <li key={fullSlug}>
            <div className="flex items-center justify-between">
              <Link
                href={`/courses/${courseSlug}/${fullSlug}`}
                className={`relative block flex-grow py-1 ${
                  isActive
                    ? "text-sm text-secondary-foreground"
                    : "text-sm text-muted-foreground hover:text-secondary-foreground"
                } ${parentSlug === "" ? "font-semibold" : ""}`}
              >
                 {parentSlug !== "" && isActive && (
                    <div
                      className="absolute -left-5 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-secondary-foreground"
                      aria-hidden="true"
                    />
                  )}
                {section.title}
              </Link>
              {hasSubsections && (
                <button
                  onClick={() => toggleSection(fullSlug)}
                  className="p-1 text-muted-foreground hover:text-secondary-foreground"
                  aria-expanded={expanded}
                  aria-label={expanded ? "Collapse section" : "Expand section"}
                >
                  <Icons.chevronDown
                    className={`size-4 transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {hasSubsections && expanded && (
              <div className="border-l-2 pl-4">
                {renderSections(section.subsections!, fullSlug)}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )

  return (
    <nav className="max-h-[420px] overflow-y-auto bg-accent p-4">
      {renderSections(sections)}
    </nav>
  )
}
