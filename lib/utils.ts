import { type ClassValue, clsx } from "clsx";
import { format, parse } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  const expectedFormat = "dd-MM-yyyy";

  try {
    const parsedDate = parse(dateStr, expectedFormat, new Date());
    if (!parsedDate) {
      throw new Error(
        "Invalid date format provided. Please use the format: " +
          expectedFormat,
      );
    }

    // Format the parsed date using date-fns
    return format(parsedDate, "EEEE, MMMM do, yyyy");
  } catch (error) {
    console.error("Error formatting date:", error);
    // Handle the error gracefully (e.g., return a default value)
    return "Invalid date";
  }
}
