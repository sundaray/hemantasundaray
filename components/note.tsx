import React, { ReactNode } from "react"

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="note-component border-primary mb-8 border-l-4 p-4">
      {children}
    </div>
  )
}
