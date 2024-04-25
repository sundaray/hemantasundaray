import { MainNav } from "@/components/main-nav";
import { homeConfig } from "@/config/home";
import { Toaster } from "@/components/ui/toaster"
import {SiteFooter} from "@/components/site-footer"


type HomeLayoutProps = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header>
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1">{children}</main>
      <Toaster />
      <SiteFooter />
    </div>
  );
}
