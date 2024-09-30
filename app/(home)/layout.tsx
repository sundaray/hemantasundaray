import { homeConfig } from "@/config/home"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

type HomeLayoutProps = {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1 border py-16">{children}</main>
      <SiteFooter />
    </div>
  )
}
