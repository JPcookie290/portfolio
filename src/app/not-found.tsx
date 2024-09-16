import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}
