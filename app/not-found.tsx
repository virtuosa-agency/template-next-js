import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="mx-auto px-6 text-center">
        <div className="mb-8">
          <p className="text-8xl font-bold text-gray-900">404</p>
          <div className="mx-auto mt-4 h-px w-16 bg-gray-300" />
        </div>

        <p className="mb-4 text-2xl font-medium text-gray-900">
          Page not found
        </p>

        <p className="mb-8 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Back to home
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
