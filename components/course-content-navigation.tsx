"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Section } from "@/lib/courses"
import { Icons } from "@/components/icons"

interface CourseContentNavigationProps {
  sections: Section[]
  courseSlug: string
  currentSectionSlug: string
}

export default function CourseContentNavigation({
  sections,
  courseSlug,
  currentSectionSlug,
}: CourseContentNavigationProps) {
  const pathname = usePathname()

  const currentSectionParts = useMemo(() => {
    return currentSectionSlug.split("/")
  }, [currentSectionSlug])

  const initiallyExpandedSections = useMemo(() => {
    return new Set(currentSectionParts.slice(0, -1))
  }, [currentSectionParts])

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
                className={`block flex-grow rounded px-2 py-1 ${
                  isActive
                    ? "bg-accent text-sm text-secondary-foreground"
                    : "text-sm text-muted-foreground hover:text-secondary-foreground hover:underline"
                }`}
              >
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
              <div className="ml-4">
                {renderSections(section.subsections!, fullSlug)}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )

  return <nav className="bg-accent p-4 overflow-y-auto max-h-[420px]">{renderSections(sections)}</nav>
}
