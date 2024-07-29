import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Julia Paier</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
}
