"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    // Use URLSearchParams to manage query parameters
    const params = new URLSearchParams(searchParams.toString());

    // Update the page parameter
    if (page === 1) {
      params.delete("page"); // Clean URL by removing the page parameter if it's the first page
    } else {
      params.set("page", page.toString());
    }

    // Use Next.js router to navigate
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between gap-8">
      <Button
        size="sm"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <p className="text-sm">
        Page {currentPage} of {totalPages}
      </p>
      <Button
        size="sm"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
