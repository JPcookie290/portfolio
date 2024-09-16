import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          // Image will be replaced on a later date...
          src="/img/current_home_tobereplaced.png"
          alt="myself"
          fill
          className="object-contain"
        />
      </div>

      <div className="h-1/2 flex flex-col justify-center items-center lg:h-full lg:w-1/2">
        <h2 className="text-3xl font-bold">Julia Paier</h2>
        {/* Text will likely be changed in the future */}
        <p className="mt-4 text-lg mr-10 ml-10">
          Welcome to my portfolio! I'm an aspiring web developer with a passion
          for creating engaging and dynamic front-end experiences. Currently,
          I'm honing my skills and knowledge at edvgraz, where I'm building a
          strong foundation in web technologies. I'm excited to share my journey
          as I grow and develop new skills in designing user-friendly and
          interactive websites. Stay tuned for more projects!
        </p>
        <div className="flex gap-4 mt-4 mb-8">
          <Link
            href="/projects"
            className="bg-pastelGreen text-black border border-black px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition"
          >
            My Projects
          </Link>

          <a
            href="mailto:julia.paier@yahoo.com"
            className="bg-pastelGreen text-black border border-black px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
