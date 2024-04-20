import { SearchParams } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function useTags(searchParams: SearchParams) {
  const currentTag = searchParams?.tag || "";

  // Fetch all tags
  const postsDirectory = path.join(process.cwd(), "app", "blog", "posts");
  const postFiles = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  const allTags = new Set<string>();

  postFiles.forEach((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    data.tags?.forEach((tag: string) => allTags.add(tag));
  });

  const uniqueTags = Array.from(allTags);

  return {
    currentTag,
    uniqueTags,
  };
}
