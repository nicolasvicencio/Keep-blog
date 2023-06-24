import parseDate from "@/scripts/parseDate";
import { PostMetadata } from "@/types/types";
import Link from "next/link";
import React from "react";

type Props = {
  post: PostMetadata;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="p-8 card rounded-md">
      <img
        src={post.thumbnail}
        alt="thumbnail"
        className="w-auto h-auto rounded-s"
      />
      <h3 className="pt-2 text-xl font-bold">{post.title}</h3>
      <p className="py-2">{post.subtitle}</p>
      <div className="flex justify-between items-center">
        <Link
          href={`posts/${post.slug}`}
          key={post.slug}
          className="rounded-s btn btn-primary"
        >
          Read Article
        </Link>
        <span className="text-sm align-bottom">{parseDate(post.date)}</span>
      </div>
    </div>
  );
}
