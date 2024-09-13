import React from "react"
import Link from "next/link"

import { getCourseData, Section } from "@/lib/courses"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type CourseContentBreadcrumbProps = {
  courseSlug: string
  currentSectionSlug: string
}

export function CourseContentBreadcrumb({
  courseSlug,
  currentSectionSlug,
}: CourseContentBreadcrumbProps) {
  const course = getCourseData(courseSlug)
  if (!course) return null

  function findSectionPath(
    sections: Section[],
    targetSlug: string,
    currentPath: Section[] = []
  ): Section[] | null {
    for (const section of sections) {
      const newPath = [...currentPath, section]
      if (section.slug === targetSlug) return newPath
      if (section.subsections) {
        const found = findSectionPath(section.subsections, targetSlug, newPath)
        if (found) return found
      }
    }
    return null
  }
  const sectionSlugs = currentSectionSlug.split("/")
  const lastSlug = sectionSlugs[sectionSlugs.length - 1]
  const sectionPath = findSectionPath(course.sections, lastSlug)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/courses">Courses</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/courses/${courseSlug}`}>{course.title}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {sectionPath &&
          sectionPath.map((section, index) => (
            <React.Fragment key={section.slug}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === sectionPath.length - 1 ? (
                  <BreadcrumbPage>{section.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={`/courses/${courseSlug}/${sectionSlugs.slice(0, index + 1).join("/")}`}
                    >
                      {section.title}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
