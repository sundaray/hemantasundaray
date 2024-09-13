"use client"
 
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react";

 
export function SignOutButton() {
 
  async function handleLogout() {
    signOut({
        callbackUrl: `${window.location.origin}`,
      });
  }
 
  return (
    <Button className="w-full" onClick={handleLogout}>
      Sign out
    </Button>
  )
}