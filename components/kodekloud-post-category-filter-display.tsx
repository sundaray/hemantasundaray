import { Button } from "@/components/ui/button";

export function KodeKloudPostCategoryFilterDisplay({
  selectedCategory,
  totalCategoryPosts,
  onClearCategory,
}) {
  return (
    <div className="flex items-center justify-between">
      {selectedCategory && (
        <p className="text-sm text-muted-foreground">
          Showing {totalCategoryPosts} posts categorized under{" "}
          {selectedCategory}
        </p>
      )}
      {selectedCategory && (
        <Button
          size="sm"
          onClick={onClearCategory}
          className="border border-lime-200 bg-lime-100 text-lime-800 hover:bg-lime-200"
        >
          Clear filter
        </Button>
      )}
    </div>
  );
}
