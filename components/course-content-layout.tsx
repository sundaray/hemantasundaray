"use client"

import { usePathname } from "next/navigation"
import { useRouter } from "nextjs-toploader/app"

import { courses, Section } from "@/lib/courses"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CourseContentBreadcrumb } from "@/components/course-content-breadcrumb"
import { CourseContentNavigation } from "@/components/course-content-navigation"

type CourseContentLayoutProps = {
  children: React.ReactNode
  frontmatter: { updatedAt: string }
}

export function CourseContentLayout({
  children,
  frontmatter,
}: CourseContentLayoutProps) {
  let updatedAt

  if (frontmatter) {
    updatedAt = frontmatter.updatedAt
  }

  const pathname = usePathname()
  const router = useRouter()

  const parts = pathname.split("/")
  const courseSlug = parts[2]
  const currentSectionSlug = parts.slice(3).join("/")

  const course = courses.find((c) => c.slug === courseSlug)
  if (!course) return null

  const flattenSections = (sections: Section[], parentSlug = ""): Section[] => {
    return sections.reduce((acc: Section[], section: Section) => {
      const fullSlug = parentSlug
        ? `${parentSlug}/${section.slug}`
        : section.slug
      acc.push({ ...section, fullSlug })
      if (section.subsections) {
        acc.push(...flattenSections(section.subsections, fullSlug))
      }
      return acc
    }, [])
  }

  const flattenedSections = flattenSections(course.sections)
  const currentIndex = flattenedSections.findIndex(
    (section) => section.fullSlug === currentSectionSlug
  )

  const handleNavigation = (direction: "previous" | "next") => {
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= 0 && newIndex < flattenedSections.length) {
      const newPath = `/courses/${courseSlug}/${flattenedSections[newIndex].fullSlug}`
      router.push(newPath)
    }
  }

  const isFirstSection = currentIndex === 0
  const isLastSection = currentIndex === flattenedSections.length - 1

  return (
    <>
      <div className="container grid max-w-4xl grid-cols-16">
        <aside className="sticky top-24 col-start-1 col-end-5 hidden self-start lg:block">
          <CourseContentNavigation
            sections={course.sections}
            courseSlug={courseSlug}
            currentSectionSlug={currentSectionSlug}
          />
        </aside>
        <div className="col-span-full col-start-1 lg:col-start-6">
          <CourseContentBreadcrumb
            courseSlug={courseSlug}
            currentSectionSlug={currentSectionSlug}
          />
          <article className="prose mt-4">{children}</article>
          {updatedAt && (
            <p className="mb-8 text-sm text-green-600">
              This chapter was last updated on {formatDate(updatedAt)}.
            </p>
          )}
          <div className="flex justify-between">
            <Button
              className="hover:bg-blue-700"
              onClick={() => handleNavigation("previous")}
              disabled={isFirstSection}
            >
              Previous
            </Button>
            <Button
              className="hover:bg-blue-700"
              onClick={() => handleNavigation("next")}
              disabled={isLastSection}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
