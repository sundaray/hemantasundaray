import fs from "fs"
import path from "path";

import {cache} from "react"
import matter from "gray-matter";


export const getPosts = cache(async function() {
    const postsDirectory = path.join(process.cwd(), 'app', 'blog', "posts");

    const files = fs.readdirSync(postsDirectory);

    const posts = files.map(function(fileName) {
        const slug = fileName.replace(".mdx", "");
        const fileContents = fs.readFileSync(
            path.join(postsDirectory, fileName),
            "utf8"
        );
        const {data, content} = matter(fileContents);

        return {
            slug,
            data,
            content,
        };
    });

    return posts;
});

export async function getPost(slug: string) {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}
