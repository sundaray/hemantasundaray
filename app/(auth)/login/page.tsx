import { Suspense } from "react"
import type { Metadata } from "next"

import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Log in to your account - hemantasundaray.com",
}

export default function LoginPage() {
  return (
    <div className="w-full sm:mx-auto sm:max-w-[480px]">
      <h1 className="mb-8 px-6 text-3xl sm:px-12">Log in</h1>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}
