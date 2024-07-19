import React, { ReactNode } from "react"

export function Note({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="note-component border-muted-foreground mb-8 border-l-4 p-4">
      <p>{title}</p>
      {children}
    </div>
  )
}
