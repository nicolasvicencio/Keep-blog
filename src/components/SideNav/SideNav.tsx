import { getPostMetadata } from "@/scripts/helperPost";
import parseDate from "@/scripts/parseDate";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SideNav({}: Props) {
  const postMetadata = getPostMetadata();

  return (
    <aside className=" h-auto p-4 lg:w-[20%] text-gray-500">
      <h3 className="text-xl border-[#6BAFC6] border-b">Lastest posts</h3>
      <nav>
        <ul>
          {postMetadata.map((post) => (
            <li key={post.slug} className="rounded-s my-4 hover:text-pink-400">
              <Link key={post.slug} href={`${post.slug}`}>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-600">
                    {parseDate(post.date)}
                  </span>
                  <h4 className="text-md">{post.title}</h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
