"use client"

import * as React from "react"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { userAuthSchema } from "@/lib/validations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export type FormData = z.infer<typeof userAuthSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(userAuthSchema) })

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)

  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/",
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      toast({
        title: "Something went wrong.",
        description: "Your login request failed. Please try again.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Check your email",
      description:
        "We have sent you a login link. Be sure to check your spam too.",
    })

    reset()
  }

  return (
    <Suspense>
      <div className="grid gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <Label htmlFor="email" className="text-muted-foreground">
                Email
              </Label>
              <Input
                className="bg-white"
                id="email"
                type="email"
                placeholder="name@example.com"
                disabled={isLoading || isGoogleLoading}
                {...register("email")}
              />
              {errors.email && (
                <p className="px-1 text-xs text-red-600 animate-in fade-in-0 slide-in-from-left-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full text-base hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.loaderCircle className="mr-2 size-4 animate-spin" />
              )}
              Email me a login link
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase text-zinc-600">
            <span className="bg-background px-2">Or</span>
          </div>
        </div>
        <Button
          type="submit"
          className="text-base text-muted-foreground"
          variant="outline"
          onClick={() => {
            setIsGoogleLoading(true)
            signIn("google", {
              callbackUrl: searchParams?.get("from") || "/",
            })
          }}
          disabled={isLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Icons.loaderCircle className="mr-2 size-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 size-6" />
          )}{" "}
          Log in with Google
        </Button>
      </div>
    </Suspense>
  )
}
