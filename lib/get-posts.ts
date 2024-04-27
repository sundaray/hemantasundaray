import type { Post } from "@/types";
import { SearchParams } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import "server-only";

export function getPosts(searchParams: SearchParams) {
  const tag = searchParams?.tag || "";
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  const postsPerPage = 5;

  const postsDirectory = path.join(process.cwd(), "app", "blog", "(posts)");

  const dirs = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let posts: Post[] = dirs.map((dirName) => {
    const filePath = path.join(postsDirectory, dirName, "page.mdx");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const {
      data: {
        title,
        description,
        author,
        publishedAt,
        updatedAt,
        tags,
        published,
      },
    } = matter(fileContents);

    return {
      slug: dirName,
      title,
      description,
      author,
      publishedAt,
      updatedAt,
      published,
      tags,
    };
  });

  // Filter posts that are published
  posts = posts.filter((post) => post.published);

  if (tag) {
    posts = posts.filter((post) =>
      post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
    );
  }

  if (query) {
    posts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return {
    tag,
    currentPosts,
    totalPosts,
    currentPage,
    totalPages,
  };
}
