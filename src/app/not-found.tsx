import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pl">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 bg-clip-text text-transparent mb-8">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, but the page you are looking for does not exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                🏠 Home
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                ✉️ Contact us
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

