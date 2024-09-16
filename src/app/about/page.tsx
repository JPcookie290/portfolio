"use client";

import React, { useRef } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (iconContainerRef.current) {
      iconContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (iconContainerRef.current) {
      iconContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-2/3 mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed">
            As a web developer in training, I’m exploring a diverse set of
            programming languages and technologies. From building responsive
            websites with HTML, CSS, and JavaScript to experimenting with
            TypeScript, React, and Vite, I love diving into the code that brings
            designs to life. I also have experience with back-end tools like
            PHP, SQL, and Java, which allows me to approach projects with a
            full-stack mindset. Platforms like WordPress are also part of my
            toolkit, enabling me to create content-driven websites. Beyond
            development, I’m passionate about calligraphy and graphic design.
            These creative pursuits allow me to approach web design with a keen
            eye for aesthetics, typography, and user experience, ensuring that
            my projects are both functional and visually compelling.
          </p>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center md:hidden overflow-x-scroll scrollbar-hide gap-8 mt-8">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-javascript.svg"
              alt="JavaScript"
              width={50}
              height={50}
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-typescript.svg"
              alt="TypeScript"
              width={50}
              height={50}
            />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-react.svg"
              alt="React"
              width={50}
              height={50}
            />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-next.js.svg"
              alt="Next.js"
              width={50}
              height={50}
            />
            <p>Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-github.svg"
              alt="GitHub"
              width={50}
              height={50}
            />
            <p>GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-vite.svg"
              alt="Vite"
              width={50}
              height={50}
            />
            <p>Vite</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-wordpress.svg"
              alt="WordPress"
              width={50}
              height={50}
            />
            <p>WordPress</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-java-96.svg"
              alt="Java"
              width={50}
              height={50}
            />
            <p>Java</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-python.svg"
              alt="Python"
              width={50}
              height={50}
            />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-php-color-96.png"
              alt="PHP"
              width={50}
              height={50}
            />
            <p>PHP</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-mysql-96.png"
              alt="mySQL"
              width={50}
              height={50}
            />
            <p>mySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-css-96.png"
              alt="CSS"
              width={50}
              height={50}
            />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/icons8-html-96.png"
              alt="HTML"
              width={50}
              height={50}
            />
            <p>HTML</p>
          </div>
        </div>

        <div className="relative w-full md:w-2/3 hidden md:flex justify-center mt-12">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          >
            &larr;
          </button>
          <div
            ref={iconContainerRef}
            className="flex gap-8 overflow-x-scroll scrollbar-hide scroll-smooth w-full justify-center"
            style={{ maxWidth: "800px" }}
          >
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-javascript.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <p>JavaScript</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-typescript.svg"
                alt="TypeScript"
                width={50}
                height={50}
              />
              <p>TypeScript</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-react.svg"
                alt="React"
                width={50}
                height={50}
              />
              <p>React</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-next.js.svg"
                alt="Next.js"
                width={50}
                height={50}
              />
              <p>Next.js</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-github.svg"
                alt="GitHub"
                width={50}
                height={50}
              />
              <p>GitHub</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-vite.svg"
                alt="Vite"
                width={50}
                height={50}
              />
              <p>Vite</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-wordpress.svg"
                alt="WordPress"
                width={50}
                height={50}
              />
              <p>WordPress</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-java-96.svg"
                alt="Java"
                width={50}
                height={50}
              />
              <p>Java</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-python.svg"
                alt="Python"
                width={50}
                height={50}
              />
              <p>Python</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-php-color-96.png"
                alt="PHP"
                width={50}
                height={50}
              />
              <p>PHP</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-mysql-96.png"
                alt="mySQL"
                width={50}
                height={50}
              />
              <p>mySQL</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-css-96.png"
                alt="CSS"
                width={50}
                height={50}
              />
              <p>CSS</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center w-24">
              <Image
                src="/icons/icons8-html-96.png"
                alt="HTML"
                width={50}
                height={50}
              />
              <p>HTML</p>
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
