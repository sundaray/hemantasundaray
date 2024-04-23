"use client";

import { KodeKloudPostCategory } from "@/components/kodekloud-post-category";
import { KodeKloudPostCategoryFilterDisplay } from "@/components/kodekloud-post-category-filter-display";
import { KodeKloudPostList } from "@/components/kodekloud-post-list";
import { KodeKloudPostPagination } from "@/components/kodekloud-post-pagination";
import { useKodeKloudPosts } from "@/hooks/use-kodekloud-posts";

export function KodeKloudPosts() {
  const {
    posts,
    categories,
    currentPage,
    totalPages,
    totalCategoryPosts,
    selectedCategory,
    onSelectCategory,
    onClearCategory,
    onNextPage,
    onPrevPage,
  } = useKodeKloudPosts();

  return (
    <div className="mb-8 space-y-8">
      <KodeKloudPostCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <KodeKloudPostCategoryFilterDisplay
        selectedCategory={selectedCategory}
        totalCategoryPosts={totalCategoryPosts}
        onClearCategory={onClearCategory}
      />
      <KodeKloudPostList posts={posts} />
      <KodeKloudPostPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </div>
  );
}
