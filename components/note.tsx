import { Icons } from "@/components/icons";
import React, { ReactNode } from "react";

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="note-component mb-8 border-l-4 border-primary bg-blue-100 p-4">
      {children}
    </div>
  );
}
s;