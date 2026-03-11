import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "SimulatedCheckride Blog | Private Pilot Oral Exam Prep",
    template: "%s | SimulatedCheckride Blog",
  },
  description:
    "Free study guides and oral exam prep articles for private pilot checkride candidates. Covering regulations, weather, aerodynamics, navigation, and more.",
  metadataBase: new URL("https://blog.simulatedcheckride.com"),
  openGraph: {
    siteName: "SimulatedCheckride Blog",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* Header */}
        <header className="bg-brand shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-brand-accent font-bold text-xl">✈️</span>
              <span className="text-white font-bold text-lg leading-tight">
                SimulatedCheckride Blog
              </span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-blue-100">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Articles
              </Link>
              <a
                href="https://simulatedcheckride.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white px-4 py-1.5 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                Try the App →
              </a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-white font-semibold mb-2">SimulatedCheckride Blog</p>
              <p>
                Free study resources for private pilot candidates preparing for
                their FAA oral exam and checkride.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Resources</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    All Articles
                  </Link>
                </li>
                <li>
                  <a
                    href="https://simulatedcheckride.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    SimulatedCheckride.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.faa.gov/training_testing/testing/airmen/test_questions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    FAA Airman Testing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Prep Smarter</p>
              <p className="mb-3">
                Practice your oral exam with an AI examiner at SimulatedCheckride.com.
              </p>
              <a
                href="https://simulatedcheckride.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-accent text-white text-xs font-bold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                Start Practicing Free →
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center text-xs py-4 text-gray-600">
            © {new Date().getFullYear()} SimulatedCheckride.com — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
