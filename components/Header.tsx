import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">My Portfolio</h1>
      <nav>
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/about" className="mr-4">
          About
        </a>
        <a href="/projects">Projects</a>
      </nav>
    </header>
  );
}
