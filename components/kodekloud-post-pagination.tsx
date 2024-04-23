import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { KodeKloudPostsHook } from "@/types";

type KodeKloudPostPaginationProps = Pick<
  KodeKloudPostsHook,
  "currentPage" | "totalPages" | "onNextPage" | "onPrevPage"
>;

export function KodeKloudPostPagination({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}: KodeKloudPostPaginationProps) {
  return (
    <nav
      className="mx-auto flex w-fit items-center space-x-4"
      aria-label="pagination"
    >
      {currentPage > 1 && (
        <Button
          size="sm"
          onClick={onPrevPage}
          className="size-8 rounded-full bg-blue-100 p-0 hover:bg-blue-200"
        >
          <Icons.chevronLeft className="size-5 text-primary" />
          <span className="sr-only">Previous</span>
        </Button>
      )}
      {totalPages > 1 && (
        <span className="text-primary">
          Page {currentPage} of {totalPages}
        </span>
      )}
      {currentPage < totalPages && (
        <Button
          size="sm"
          onClick={onNextPage}
          className="size-8 rounded-full bg-blue-100 p-0 hover:bg-blue-200"
        >
          <Icons.chevronRight className="size-5 text-primary" />
          <span className="sr-only">Next</span>
        </Button>
      )}
    </nav>
  );
}
