import Post from "@/components/Post";
import getPostMetadata from "@/components/getPostMetadata";

export default function Notes() {
  const postMetadata = getPostMetadata();
  return (
    <>
      <h1 className="text-4xl mt-12 font-bold text-primary dark:text-gray-200 mb-7">
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
