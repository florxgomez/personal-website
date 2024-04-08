import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import path from "path";
import { getTagDecoration } from "@/lib/utils";

const getPostContent = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const file = `${postsDirectory}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function Posts(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="mt-12 space-y-2">
      <h1 className="font-bold text-3xl text-primary-dark">
        {post.data.title}
      </h1>
      <p className={"text-lg italic text-neutral-500"}>{post.data.date}</p>
      <p className="flex gap-2">
        {post.data.tags.split(" ").map((tag: string) => (
          <span
            className={`text-sm text-neutral-400 ${getTagDecoration(tag)}`}
            key={tag}
          >
            #{tag}
          </span>
        ))}
      </p>
      <hr className="border-neutral-500" />
      <article
        className="prose prose-neutral md:prose-lg dark:prose-invert  
			 dark:prose-a:text-neutral-500 pb-8"
      >
        <Markdown className="markdown">{post.content}</Markdown>
      </article>
    </div>
  );
}
