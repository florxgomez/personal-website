import { Post } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getPostMetadata(): Post[] {
  const postsDirectory = path.join(process.cwd(), "src/posts");

  const files = fs.readdirSync(postsDirectory);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${postsDirectory}/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
    };
  });

  return posts;
}
