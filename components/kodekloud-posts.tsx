"use client";

import { KodeKloudPostCategory } from "@/components/kodekloud-post-category";
import {KodeKloudPostList} from "@/components/kodekloud-post-list";
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
    <div className="mt-12">
      <KodeKloudPostCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={onSelectCategory}
        onClear={onClearCategory}
      />{" "}
      <KodeKloudPostList posts={posts} />
      <hr className="mb-4 mt-8" />
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={onNextPage}
        onPrev={onPrevPage}
      /> */}
    </div>
  );
}
