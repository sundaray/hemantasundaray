import Link from "next/link"

import { Course } from "@/lib/courses"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

type CourseCardProps = Pick<Course, "title" | "slug" | "description">

export function CourseCard({ title, slug, description }: CourseCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border bg-slate-50 p-6 shadow-sm",
        slug === "terraform-for-beginners" &&
          'bg-[url("/terraform.svg")] bg-[length:10rem_10rem] bg-right-bottom bg-no-repeat'
      )}
    >
      <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-white">
        Free
      </span>
      <h2 className="mt-2">{title}</h2>
      <p className="mb-6 mt-2 text-muted-foreground">{description}</p>
      <Link
        href={`/courses/${slug}`}
        className="group inline-flex items-center text-primary"
      >
        More details
        <Icons.arrowRight
          size={18}
          className="ml-1 transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}
