import CourseCard from "@/components/course-card"

const courses = [
  { title: "Terraform for Beginners", slug: "terraform-for-beginners" },
]

export default function CoursesPage() {
  return (
    <div className="container max-w-3xl">
      <h1 className="mb-8 text-4xl font-bold">Courses</h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>
    </div>
  )
}
