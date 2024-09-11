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
      <ul className={`space-y-2 ${level > 0 ? "ml-4" : ""}`}>
        {sections.map((section) => (
          <li key={section.slug}>
            <span className={`${level === 0 ? "font-semibold" : ""}`}>
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
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold">{courseData.title}</h1>
          <h2 className="mb-4 text-2xl font-semibold">Course Content</h2>
          {renderTableOfContents(courseData.sections)}
          <div className="mt-8">
            <Link
              href={`/courses/${params.courseSlug}/${courseData.sections[0].slug}`}
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
