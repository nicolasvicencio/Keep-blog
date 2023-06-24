import React from "react";
import Link from "next/link.js";
import { getPostMetadata } from "../../scripts/helperPost";
import { PostCard } from "../PostCard";
type Props = {};

export default function PostFeed({}: Props) {
  const postMetadata = getPostMetadata();

  return (
    <div className="md:w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        {postMetadata.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
