import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container h-16 max-w-6xl border-t">
        <p className="text-sm text-muted-foreground">Source Code</p>
      <p className="text-sm text-muted-foreground flex gap-2">
        &copy;
        {currentYear}{" "}
        <span>Hemanta Sundaray</span>
      </p>
    </footer>
  );
}
