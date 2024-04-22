import { MainNav } from "@/components/main-nav";
import { homeConfig } from "@/config/home";

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

export default async function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header>
        <MainNav items={homeConfig.mainNav} />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
