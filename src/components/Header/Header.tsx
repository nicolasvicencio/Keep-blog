import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between w-full p-6">
      <Link href="/">
        <h1 className="font-bold text-xl">Keep-blog</h1>
      </Link>
      <nav className="flex gap-2">
        <p>test1</p>
        <p>test1</p>
        <p>test1</p>
      </nav>
    </header>
  );
}
