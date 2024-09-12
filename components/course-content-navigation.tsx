"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Section } from "@/lib/courses"
import { Icons } from "@/components/icons"

interface CourseContentNavigationProps {
  sections: Section[]
  courseSlug: string
}

export default function CourseContentNavigation({
  sections,
  courseSlug,
}: CourseContentNavigationProps) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    )
  }

  const renderSections = (sections: Section[], parentSlug?: string) => (
    <ul className="space-y-1">
      {sections.map((section) => {
        const fullSlug = parentSlug
          ? `${parentSlug}/${section.slug}`
          : section.slug
        const isExpanded = expandedSections.includes(fullSlug)
        const hasSubsections = section.subsections && section.subsections.length > 0

        return (
          <li key={fullSlug}>
            <div className="flex items-center justify-between">
              <Link
                href={`/courses/${courseSlug}/${fullSlug}`}
                className={`block rounded px-2 py-1 flex-grow ${
                  pathname.includes(fullSlug)
                    ? "bg-border text-sm text-secondary-foreground"
                    : "text-muted-foreground hover:bg-border text-sm"
                }`}
              >
                {section.title}
              </Link>
              {hasSubsections && (
                <button
                  onClick={() => toggleSection(fullSlug)}
                  className="p-1 text-muted-foreground hover:text-secondary-foreground"
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? "Collapse section" : "Expand section"}
                >
                  <Icons.chevronDown
                    className={`size-4 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {hasSubsections && isExpanded && (
              <div className="ml-4 mt-1">
                {renderSections(section.subsections!, fullSlug)}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )

  return <nav className="bg-accent p-4">{renderSections(sections)}</nav>
}