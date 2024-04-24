import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { homeConfig } from "@/config/home";

type WorkLayoutProps = {
  children: React.ReactNode;
};

export default async function WorkLayout({ children }: WorkLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="background-blur-md sticky top-0 z-10 bg-white/90">
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1 py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
