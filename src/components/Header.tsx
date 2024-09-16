"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-lilac via-pinkish via-lightOrange to-pastelGreen text-black p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Julia Paier</Link>
        </div>

        <nav className="hidden md:flex space-x-4 mx-auto">
          <Link
            href="/"
            className={`hover:text-white ${
              pathname === "/" ? "bg-black text-white px-2 py-1 rounded" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-white ${
              pathname === "/about"
                ? "bg-black text-white px-2 py-1 rounded"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`hover:text-white ${
              pathname === "/projects"
                ? "bg-black text-white px-2 py-1 rounded"
                : ""
            }`}
          >
            Projects
          </Link>
        </nav>

        <a
          href="/pdf/Resume_Julia_Paier_German.pdf"
          download
          className="ml-4 bg-black text-white px-4 py-2 rounded border border-black hover:bg-gray-800 transition duration-300 hidden md:block"
        >
          My Resume
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none absolute top-4 right-4 z-50"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-lg z-40`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            href="/"
            className={`hover:text-pastelGreen ${
              pathname === "/"
                ? "bg-black text-white px-2 py-1 rounded hover:text-white"
                : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-pastelGreen ${
              pathname === "/about"
                ? "bg-black text-white px-2 py-1 rounded hover:text-white"
                : ""
            }`}
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className={`hover:text-pastelGreen ${
              pathname === "/projects"
                ? "bg-black text-white px-2 py-1 rounded hover:text-white"
                : ""
            }`}
            onClick={toggleMenu}
          >
            Projects
          </Link>

          <a
            href="/pdf/Resume_Julia_Paier_German.pdf"
            download
            className="bg-pastelGreen text-black px-4 py-2 rounded border border-black hover:bg-gray-800 hover:text-white transition duration-300"
            onClick={toggleMenu}
          >
            My Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
