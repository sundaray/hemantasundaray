"use client"

import { createContext, Suspense, useContext, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react"
import { motion } from "framer-motion"
import { create } from "zustand"

import { navbarLinks } from "@/config/navbar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const IsInsideMobileNavigationContext = createContext(false)

function MobileNavigationDialog({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const initialPathname = useRef(pathname).current
  const initialSearchParams = useRef(searchParams).current

  useEffect(() => {
    if (pathname !== initialPathname || searchParams !== initialSearchParams) {
      close()
    }
  }, [pathname, searchParams, close, initialPathname, initialSearchParams])

  function onClickDialog(event: React.MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof HTMLElement)) {
      return
    }

    const link = event.target.closest("a")
    if (
      link &&
      link.pathname + link.search + link.hash ===
        window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <Dialog
      open={isOpen}
      onClickCapture={onClickDialog}
      onClose={close}
      className="fixed inset-0 z-50 md:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 top-16 bg-gray-300/20 backdrop-blur-sm data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <DialogPanel>
        <TransitionChild>
          <motion.div
            layoutScroll
            className="fixed bottom-0 left-0 top-16 w-full max-w-[300px] overflow-y-auto border bg-background px-6 pb-4 pt-6 shadow-lg shadow-gray-900/10 duration-500 ease-in-out data-[closed]:-translate-x-full sm:px-6 sm:pb-10"
          >
            <nav>
              <motion.ul
                className="flex flex-col space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navbarLinks.main.map((item) => (
                  <motion.li key={item.title} variants={itemVariants}>
                    <Link
                      className={cn(
                        "font-medium text-gray-500 transition-colors hover:text-secondary-foreground",
                        item.href === pathname && "text-secondary-foreground"
                      )}
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        </TransitionChild>
      </DialogPanel>
    </Dialog>
  )
}

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext)
}

export const useMobileNavigationStore = create<{
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export function MobileNav() {
  const isInsideMobileNavigation = useIsInsideMobileNavigation()
  const { isOpen, toggle, close } = useMobileNavigationStore()

  const pathname = usePathname()

  useEffect(() => {
    close()
  }, [pathname, close])

  const barVariants = {
    closed: (custom: number) => ({
      y: custom * 8,
      rotate: 0,
      opacity: 1,
      transition: {
        y: { delay: 0.2, duration: 0.2 },
        rotate: { duration: 0.2 },
        opacity: { delay: 0.2, duration: 0.1 },
      },
    }),
    open: (custom: number) => ({
      y: 0,
      rotate: custom * 45,
      opacity: custom === 0 ? 0 : 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 15, duration: 0.2 },
        rotate: { delay: 0.2, duration: 0.2 },
        opacity: { delay: 0.1, duration: 0.2 },
      },
    }),
  }

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        aria-controls="main-menu"
        className="relative flex h-8 w-8 items-center justify-center p-2 hover:bg-gray-100 focus:outline-none md:hidden"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          aria-hidden="true"
          focusable="false"
        >
          {[-1, 0, 1].map((index) => (
            <motion.rect
              key={index}
              custom={index}
              variants={barVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              width="24"
              height="2"
              x="0"
              y="11"
              fill="#6b7280"
            />
          ))}
        </svg>
      </Button>
      {!isInsideMobileNavigation && (
        <Suspense fallback={null}>
          <MobileNavigationDialog isOpen={isOpen} close={close} />
        </Suspense>
      )}
    </IsInsideMobileNavigationContext.Provider>
  )
}
