import { courses } from "@/lib/courses"
import { CourseCard } from "@/components/course-card"

export default function CoursesPage() {
  return (
    <div className="container max-w-3xl">
      <h1 className="mb-8 text-4xl font-bold">Courses</h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.slug}
            title={course.title}
            slug={course.slug}
          />
        ))}
      </div>
    </div>
  )
}
