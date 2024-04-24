import { MainNav } from "@/components/main-nav";
import { homeConfig } from "@/config/home";

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
    </div>
  );
}
