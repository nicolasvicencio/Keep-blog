import parseDate from "@/scripts/parseDate";
import { PostMetadata } from "@/types/types";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
type Props = {
  post: PostMetadata;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`posts/${post.slug}`} className="p-8  rounded-md">
      <img
        src={post.thumbnail}
        alt="thumbnail"
        className="w-auto h-auto rounded-s"
      />
      <span className="text-sm align-bottom text-[#6BAFC6]">
        {parseDate(post.date)}
      </span>
      <h3 className="pt-2 text-xl font-bold">{post.title}</h3>
      <p className="py-2">{post.subtitle}</p>
      <div className="flex justify-between items-center my-2">
        <p className="flex items-center gap-1">
          Read more <AiOutlineArrowRight />
        </p>
      </div>
    </Link>
  );
}
