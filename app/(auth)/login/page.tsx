import { Suspense } from "react"
import type { Metadata } from "next"

import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Log in to your account - hemantasundaray.com",
}

export default function LoginPage() {
  return (
    <div className="mx-auto space-y-8 sm:w-[400px]">
      <h1 className="text-3xl">Log in</h1>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}
