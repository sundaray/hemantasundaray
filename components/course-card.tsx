import Link from "next/link"

import { Icons } from "@/components/icons"

type CourseCardProps = {
  title: string
  slug: string
}

export function CourseCard({ title, slug }: CourseCardProps) {
  return (
    <div className="rounded-lg border bg-slate-50 p-6 shadow-sm">
      <span className="rounded-full bg-green-500 text-white px-2 py-1 text-sm">Free</span>
      <h2 className="mb-6 mt-2">{title}</h2>
      <Link
        href={`/courses/${slug}`}
        className="inline-flex items-center text-primary"
      >
        More details
        <Icons.arrowRight size={20} />
      </Link>
    </div>
  )
}
