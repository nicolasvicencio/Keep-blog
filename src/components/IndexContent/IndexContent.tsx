import { getPostLinks } from "@/scripts/helperPost";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import React from "react";

type Props = {
  slug: string;
};

export default function IndexContent({ slug }: Props) {
  const navigationLinks = getPostLinks(slug);
  console.log(navigationLinks);

  return (
    <nav className="w-[20%] text-gray-600">
      <h3>Table of contents</h3>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link}>
            <Link href={`#${link}`} scroll={false}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
