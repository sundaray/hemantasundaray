import Link from "next/link"
import { notFound } from "next/navigation"

import { getCourseData, Section } from "@/lib/courses"

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
      <ul className={`${level > 0 ? "ml-4" : ""}`}>
        {sections.map((section) => (
          <li key={section.slug}>
            <span
              className={`${level === 0 ? "font-semibold" : "text-secondary-foreground"}`}
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
      <h1 className="text-3xl font-bold">{courseData.title}</h1>
      <h2 className="text-2xl font-semibold">Course Content</h2>
      {renderTableOfContents(courseData.sections)}
      <div className="mt-8">
        <Link
          href={`/courses/${params.courseSlug}/${courseData.sections[0].slug}`}
          className="inline-flex w-full justify-center rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
