import Link from "next/link"

import { Icons } from "@/components/icons"

type CourseCardProps = {
  title: string
  slug: string
}

export default function CourseCard({ title, slug }: CourseCardProps) {
  return (
    <div className="rounded-lg border bg-accent p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
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
