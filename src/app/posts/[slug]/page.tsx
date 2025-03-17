import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import path from "path";
import { getTagDecoration } from "@/lib/utils";
import PostHeading from "@/components/posts/PostHeading";
import { myFont, recoletaSemiBold } from "@/font";
import { PostCodeBlock } from "@/components/posts/PostCodeBlock";
import PostSpan from "@/components/posts/PostSpan";
import PostSection from "@/components/posts/PostSection";
import PostPoint from "@/components/posts/PostPoint";

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

export default async function Posts(props: any) {
  const params = await props.params;
  const post = getPostContent(params.slug);

  return (
    <div className="mt-12 space-y-2 h-[100%]">
      <h1
        className={`font-bold text-4xl text-primary-dark ${recoletaSemiBold.className}`}
      >
        {post.data.title}
      </h1>
      <p className={"text-lg italic text-neutral-500"}>{post.data.date}</p>
      <p className="flex gap-2">
        {post.data.tags.split(" ").map((tag: string) => (
          <span
            className={`text-sm text-neutral-400 ${getTagDecoration(tag)} mb-2`}
            key={tag}
          >
            #{tag}
          </span>
        ))}
      </p>
      <hr className="border-neutral-300" />
      <article
        className="prose prose-neutral md:prose-lg dark:prose-invert  
			 dark:prose-a:text-neutral-500 pb-8 w-[80%]"
      >
        <Markdown
          className="markdown"
          options={{
            overrides: {
              h1: PostHeading,
              code: PostCodeBlock,
              span: PostSpan,
              section: PostSection,
              li: PostPoint,
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </div>
  );
}
