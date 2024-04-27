import { MainNav } from "@/components/main-nav";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { homeConfig } from "@/config/home";


type BlogLayoutProps = {
  children: React.ReactNode;
};

export default async function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-10">
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1 py-16">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
