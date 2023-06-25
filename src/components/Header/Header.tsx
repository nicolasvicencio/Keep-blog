import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between w-full p-6  ">
      <Link href="/" className="hover:opacity-70">
        <h1 className="font-bold text-3xl">
         <span className="text-[#6BAFC6] "> {'<'}</span>Keep<span className="text-[#6BAFC6] ">></span>
        </h1>
      </Link>
      <nav className="flex gap-2">
      </nav>
    </header>
  );
}
