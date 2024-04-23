import { Button } from "@/components/ui/button";

export function KodeKloudPostCategoryFilterDisplay({
  selectedCategory,
  totalCategoryPosts,
  onClearCategory,
}) {
  return (
    <>
      {selectedCategory && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {totalCategoryPosts} posts categorized under{" "}
            {selectedCategory}
          </p>
          <Button
            size="sm"
            onClick={onClearCategory}
            className="border border-lime-200 bg-lime-100 text-lime-800 hover:bg-lime-200"
          >
            Clear filter
          </Button>
        </div>
      )}
    </>
  );
}
