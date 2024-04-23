import { Button } from "@/components/ui/button";
import { KodeKloudPostsHook } from "@/types";

type KodeKloudPostCategoryFilterDisplayProps = Pick<
  KodeKloudPostsHook,
  "selectedCategory" | "totalCategoryPosts" | "onClearCategory"
>;

export function KodeKloudPostCategoryFilterDisplay({
  selectedCategory,
  totalCategoryPosts,
  onClearCategory,
}: KodeKloudPostCategoryFilterDisplayProps) {
  return (
    <>
      {selectedCategory && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {totalCategoryPosts} posts categorized under &quot;
            {selectedCategory}&quot;
          </p>
          <Button
            size="sm"
            onClick={onClearCategory}
            className="border border-lime-200 bg-lime-100 text-lime-900 hover:bg-lime-200"
          >
            Clear filter
          </Button>
        </div>
      )}
    </>
  );
}
