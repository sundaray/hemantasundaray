import React, { ReactNode } from "react"

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="note-component mb-8 border-l-4 border-primary p-4">
      {children}
    </div>
  )
}
