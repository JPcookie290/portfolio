import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
