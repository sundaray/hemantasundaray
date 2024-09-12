"use client"

import { usePathname, useRouter } from "next/navigation"

import { courses, Section } from "@/lib/courses"
import { Button } from "@/components/ui/button"

interface CourseContentLayoutProps {
  children: React.ReactNode
}

export function CourseContentLayout({ children }: CourseContentLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const parts = pathname.split("/")
  const courseSlug = parts[2] // Assuming the URL structure is /courses/[courseSlug]/[sectionSlug]
  const currentSectionSlug = parts[parts.length - 1]

  const course = courses.find((c) => c.slug === courseSlug)
  if (!course) return null // or some error component

  const flattenSections = (sections: Section[]): Section[] => {
    return sections.reduce((acc: Section[], section: Section) => {
      acc.push(section)
      if (section.subsections) {
        acc.push(...flattenSections(section.subsections))
      }
      return acc
    }, [])
  }

  const flattenedSections = flattenSections(course.sections)
  const currentIndex = flattenedSections.findIndex(
    (section) => section.slug === currentSectionSlug
  )

  const handleNavigation = (direction: "previous" | "next") => {
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= 0 && newIndex < flattenedSections.length) {
      const newPath = `/courses/${courseSlug}/${flattenedSections[newIndex].slug}`
      router.push(newPath)
    }
  }

  const isFirstSection = currentIndex === 0
  const isLastSection = currentIndex === flattenedSections.length - 1

  return (
    <div className="container max-w-2xl">
      <article className="prose">{children}</article>
      <div className="flex justify-between">
        <Button
          onClick={() => handleNavigation("previous")}
          disabled={isFirstSection}
        >
          Previous
        </Button>
        <Button
          onClick={() => handleNavigation("next")}
          disabled={isLastSection}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
