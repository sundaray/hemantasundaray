import { posts as kodekloudPosts } from "@/kodekloud/posts";
import { compareDesc } from "date-fns";
import { useState } from "react";

export function useKodeKloudPosts() {
  const posts_per_page = 10;
  const allPosts = [...kodekloudPosts].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const categories = Array.from(new Set(allPosts.map((post) => post.category)));
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / posts_per_page);

  const posts = filteredPosts.slice(
    (currentPage - 1) * posts_per_page,
    currentPage * posts_per_page,
  );

  return {
    posts,
    categories,
    currentPage,
    setCurrentPage,
    totalPages,
    selectedCategory,
    setSelectedCategory,
    onSelectCategory: (category: string) => {
      setSelectedCategory(category);
      setCurrentPage(1);
    },
    onClearCategory: () => {
      setSelectedCategory(null);
      setCurrentPage(1);
    },
    onNextPage: () => setCurrentPage(currentPage + 1),
    onPrevPage: () => setCurrentPage(currentPage - 1),
  };
}
