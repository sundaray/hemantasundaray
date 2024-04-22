import { MainNav } from "@/components/main-nav";
import { homeConfig } from "@/config/home";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export default async function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header>
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
