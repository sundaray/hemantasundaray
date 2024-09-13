import { homeConfig } from "@/config/home"
import { CourseContentNav } from "@/components/course-content-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SiteFooter } from "@/components/site-footer"

import "@/styles/mdx.css"

type CoursesLayoutProps = {
  children: React.ReactNode
}

export default async function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-10">
        <CourseContentNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1 py-16">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
