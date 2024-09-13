import React from "react"
import { getServerSession } from "next-auth/next"
import { FaUser } from "react-icons/fa6"

import { authOptions } from "@/lib/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { SignOutButton } from "@/components/signout-button"

export async function UserAccountNav() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  return (
    <div className="w-max space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1">
          <div className="grid size-7 place-items-center rounded-full bg-border">
            <FaUser className="text-muted-foreground" />
          </div>
          <Icons.chevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {session!.user.email && (
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  {session!.user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <SignOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
