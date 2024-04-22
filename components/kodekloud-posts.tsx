"use client";

import { KodeKloudPostCategory } from "@/components/kodekloud-post-category";
import { KodeKloudPostList } from "@/components/kodekloud-post-list";
import { KodeKloudPostPagination } from "@/components/kodekloud-post-pagination";
import { useKodeKloudPosts } from "@/hooks/use-kodekloud-posts";

export function KodeKloudPosts() {
  const {
    posts,
    categories,
    currentPage,
    totalPages,
    selectedCategory,
    onSelectCategory,
    onClearCategory,
    onNextPage,
    onPrevPage,
  } = useKodeKloudPosts();

  return (
    <div className="space-y-8">
      <KodeKloudPostCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={onSelectCategory}
        onClear={onClearCategory}
      />{" "}
      <KodeKloudPostList posts={posts} />
      <KodeKloudPostPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={onNextPage}
        onPrev={onPrevPage}
      />
    </div>
  );
}
