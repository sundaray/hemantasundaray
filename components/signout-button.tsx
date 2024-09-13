"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export function SignOutButton() {
  async function handleLogout() {
    signOut({
      callbackUrl: `${window.location.origin}`,
    })
  }

  return (
    <Button className="w-full" onClick={handleLogout}>
      Log out
    </Button>
  )
}
