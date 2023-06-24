import React from "react";
import Link from "next/link.js";
import { getPostMetadata } from "../../scripts/helperPost";
import { PostCard } from "../PostCard";
import parseDate from "@/scripts/parseDate";
import { BiTimeFive } from "react-icons/bi";
type Props = {};

export default function PostFeed({}: Props) {
  const postMetadata = getPostMetadata();

  return (
    <div className="md:w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
        {postMetadata.map((post, _i) => {
          if (_i < 3) {
            return <PostCard key={post.slug} post={post} />;
          }
        })}
      </div>
      <div className="my-10">
        {postMetadata.map((post, _i) => {
          if (_i >= 3) {
            return (
              <Link
                href={`posts/${post.slug}`}
                className="flex justify-between items-center border-y border-y-gray-900 p-4"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4 text-[#6BAFC6]">
                    <BiTimeFive className="text-sm" />
                    <span className="text-xs">{parseDate(post.date)}</span>
                  </div>
                  <h3 className="text-lg">{post.title}</h3>
                </div>
                <img
                  src={post.thumbnail}
                  alt="post thumbnail"
                  className="h-36"
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
