// app/404.tsx (Next.js 13+)
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-300 text-center mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
