import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container h-16 max-w-6xl border-t">
      <p className="mb-6 md:mb-0">
        &copy;
        <span className="font-medium text-primary">Hemanta Sundaray</span>
        {currentYear}{" "}
      </p>
    </footer>
  );
}
