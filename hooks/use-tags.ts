import { SearchParams } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function useTags(searchParams: SearchParams) {
  const currentTag = searchParams?.tag || "";

  // Fetch all tags
  const postsDirectory = path.join(process.cwd(), "app", "blog", "(posts)");

  const dirs = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const allTags = new Set<string>();

  dirs.forEach((dirName) => {
    const filePath = path.join(postsDirectory, dirName, "page.mdx");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    if (data.tags) {
      data.tags.forEach((tag: string) => allTags.add(tag));
    }
  });

  const uniqueTags = Array.from(allTags);

  return {
    currentTag,
    uniqueTags,
  };
}
