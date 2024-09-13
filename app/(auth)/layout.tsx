import { homeConfig } from "@/config/home"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

type AuthLayoutProps = {
  children: React.ReactNode
}

export default async function LoginLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header>
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1 py-16">{children}</main>
      <SiteFooter />
    </div>
  )
}
