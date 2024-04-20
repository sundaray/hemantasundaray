type HomeLayoutProps = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
