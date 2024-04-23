import { Icons } from "@/components/icons";
import React from "react";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-primary underline decoration-primary underline-offset-2 transition-all hover:no-underline"
    >
      {children}
      <Icons.externalLink className="ml-1 inline-block size-4" />
    </a>
  );
}
