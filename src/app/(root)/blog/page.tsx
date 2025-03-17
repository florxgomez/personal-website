import Post from "@/components/Post";
import getPostMetadata from "@/components/getPostMetadata";
import { caps, recoletaBold } from "@/font";

export default function Notes() {
  const postMetadata = getPostMetadata();
  return (
    <>
      <h1
        className={`text-5xl mt-12 text-primary dark:text-gray-200 mb-10 ${recoletaBold.className}`}
      >
        Blog
      </h1>

      {postMetadata &&
        postMetadata
          .sort(
            (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate()
          )
          .map((post) => (
            <div className={"mb-3"} key={post.slug}>
              <Post {...post} />
            </div>
          ))}
    </>
  );
}
