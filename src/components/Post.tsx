import { recoletaRegular, recoletaSemiBold } from "@/font";
import { getTagDecoration } from "@/lib/utils";
import type { Post } from "@/types";
import Link from "next/link";

export default function Post({ slug, title, subtitle, date, tags }: Post) {
  return (
    <div className="flex flex-col space-y-1 mb-4 mt-10">
      <Link href={`/posts/${slug}`} key={slug}>
        <span
          className={` text-2xl hover:text-primary dark:hover:text-primary-dark ${recoletaSemiBold.className}`}
        >
          {title}
        </span>{" "}
        <span className="text-lg italic text-neutral-500">{date}</span>
      </Link>

      <p className={`text-sm text-neutral-500`}>{subtitle}</p>
      <p className="flex gap-2">
        {tags.split(" ").map((tag) => (
          <span className={`text-sm ${getTagDecoration(tag)}`} key={tag}>
            #{tag}
          </span>
        ))}
      </p>
    </div>
  );
}
