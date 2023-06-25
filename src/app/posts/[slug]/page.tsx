import { IndexContent, SideNav } from "@/components";
import { getPostContent, getPostMetadata } from "@/scripts/helperPost";
import parseDate from "@/scripts/parseDate";
import Markdown from "markdown-to-jsx";
import React from "react";

type Props = {
  params: any;
};

export default function page({ params }: Props) {
  const postContent = getPostContent(params.slug);

  return (
    <div>
      <div className="mb-36 mt-10 w-[70%] mx-auto min-h-screen h-full flex gap-10 items-start">
        <article className="prose flex flex-col items-center gap-10 mt-10 ">
          <div className="text-start">
            <h1 className="post-title ">{postContent.data.title}</h1>
            <p className="text-md">{postContent.data.subtitle}</p>
            <span className="text-gray-600 text-sm">
              {parseDate(postContent.data.date)}
            </span>
          </div>
          <div className="flex gap-4">
            <Markdown
              options={{ forceBlock: true }}
              className="article p-6 w-[80%]"
            >
              {postContent.content}
            </Markdown>
            <SideNav />
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
