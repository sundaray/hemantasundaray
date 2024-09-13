import Link from "next/link"
import { notFound } from "next/navigation"

import { getCourseData, Section } from "@/lib/courses"
import { cn } from "@/lib/utils"

export default async function CourseOverviewPage({
  params,
}: {
  params: { courseSlug: string }
}) {
  const courseData = getCourseData(params.courseSlug)

  if (!courseData) {
    notFound()
  }

  const renderTableOfContents = (sections: Section[], level: number = 0) => {
    return (
      <ul
        className={cn(
          level === 0 && "ml-8 list-decimal space-y-4",
          level > 0 &&
            "ml-4 mt-2 list-disc space-y-2 marker:text-muted-foreground"
        )}
      >
        {sections.map((section) => (
          <li key={section.slug}>
            <span
              className={cn(
                level === 0
                  ? "text-secondary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {section.title}
            </span>
            {section.subsections &&
              renderTableOfContents(section.subsections, level + 1)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="container max-w-3xl">
      <h1 className="mb-4">{courseData.title}</h1>
      <p className="mb-8 text-lg">
        Want to learn Terraform but don't know where to start?
      </p>
      <p className="mb-8 text-lg">You're in the right place.</p>
      <p className="mb-8 text-lg">
        In just a few hours, you'll go from a beginner to someone with a solid
        understanding of Terraform fundamentals.
      </p>

      <p className="mb-8 text-lg">Here's what you'll learn in the course:</p>

      {renderTableOfContents(courseData.sections)}

      <p className="my-8 text-lg">Ready to master Terraform?</p>

      <Link
        href={`/courses/${params.courseSlug}/${courseData.sections[0].slug}`}
        className="inline-flex w-full justify-center rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  )
}
