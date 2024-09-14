import { Analytics } from "@vercel/analytics/react"
import NextTopLoader from "nextjs-toploader"

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { TailwindIndicator } from "@/components/tailwind-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hemanta Sundaray | Fullstack Web Developer & Technical Writer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>
          <NextTopLoader showSpinner={false} color="#2563eb" shadow={false} />
          {children}
          <Analytics />
          <Toaster />
        </body>
        <TailwindIndicator />
      </ThemeProvider>
    </html>
  )
}
