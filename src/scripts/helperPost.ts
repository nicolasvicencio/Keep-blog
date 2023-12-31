import { PostMetadata } from "@/types/types";
import * as fs from "fs";
import matter from "gray-matter";
const postFolder = "src/posts";

export function getPostMetadata(): PostMetadata[] {
  const files = fs.readdirSync(postFolder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const posts = markdownFiles.map((fileName) => {
    const fileContent = fs.readFileSync(`${postFolder}/${fileName}`, "utf8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumbnail: matterResult.data.thumbnail,
      slug: fileName.replace(".md", ""),
    };
  });
  const sortedPost = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return sortedPost;
}

export function getPostContent(slug: string) {
  const file = `${postFolder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export function getPostLinks(slug: string) {
  const file = `${postFolder}/${slug}.md`;
  const contentFile = fs.readFileSync(file, "utf8");
  const matterResult = matter(contentFile);
  const links = matterResult.content
    .split("\n")
    .filter((el) => el.includes("##"))
    .map((el) => el.replace("##", ""))
    .map((el) => el.replace("#", ""));
  return links;
}
