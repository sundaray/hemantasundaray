import { clsx, type ClassValue } from "clsx"
import { format, parse } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string): string {
  const expectedFormat = "yyyy-MM-dd"

  try {
    const parsedDate = parse(dateStr, expectedFormat, new Date())
    if (!isNaN(parsedDate.getTime())) {
      return format(parsedDate, "EEEE, MMMM do, yyyy")
    } else {
      throw new Error("Invalid date")
    }
  } catch (error) {
    console.error("Error formatting date:", error)
    return (error as Error).message
  }
}
