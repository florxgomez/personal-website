import Post from "@/components/Post";
import getPostMetadata from "@/components/getPostMetadata";
import { caps } from "@/font";

export default function Notes() {
  const postMetadata = getPostMetadata();
  return (
    <>
      <h1
        className={`text-6xl mt-12 text-primary dark:text-gray-200 mb-5 ${caps.className}`}
      >
        Blog
      </h1>

      {postMetadata &&
        postMetadata
          .sort(
            (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate()
          )
          .map((post) => <Post key={post.slug} {...post} />)}
    </>
  );
}
