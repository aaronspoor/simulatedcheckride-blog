import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "SimulatedCheckride Blog | Private Pilot Oral Exam Study Guides",
  description:
    "Free oral exam prep articles for private pilot checkride candidates. Study regulations, weather, aerodynamics, navigation, and more — then practice with SimulatedCheckride.com.",
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-brand-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
            Free Checkride Study Resources
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Ace Your{" "}
            <span className="text-brand-accent">Private Pilot Oral Exam</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            In-depth guides on every topic your DPE will ask about — regulations,
            weather, aerodynamics, airspace, and more. Then practice the real
            thing with an AI examiner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://simulatedcheckride.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:opacity-90 text-white font-bold px-8 py-3 rounded-lg transition-opacity"
            >
              Practice Oral Exam Now →
            </a>
            <Link
              href="/blog"
              className="border-2 border-white text-white hover:bg-white hover:text-brand font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Browse Study Guides
            </Link>
          </div>
        </div>
      </section>

      {/* What is SimulatedCheckride */}
      <section className="bg-gray-50 border-b py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-sm sm:text-base">
            <strong className="text-brand">SimulatedCheckride.com</strong> is an AI-powered oral exam simulator for private pilot candidates.{" "}
            <a
              href="https://simulatedcheckride.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light font-semibold hover:underline"
            >
              Practice full oral exams for $59.99/session →
            </a>
          </p>
        </div>
      </section>

      {/* Topic coverage */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-brand text-center mb-12">
          Topics Covered on the Oral Exam
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "📋", title: "Regulations", sub: "FAR Part 61 & 91" },
            { icon: "🌦️", title: "Weather", sub: "METARs, TAFs, SIGMETs" },
            { icon: "🗺️", title: "Navigation", sub: "Charts & airspace" },
            { icon: "⚙️", title: "Aircraft Systems", sub: "Airworthiness & MEL" },
            { icon: "🌀", title: "Aerodynamics", sub: "Performance & V-speeds" },
            { icon: "🛬", title: "Airport Ops", sub: "Airspace & NOTAMs" },
            { icon: "🚨", title: "Emergencies", sub: "Procedures & decisions" },
            { icon: "⚖️", title: "Weight & Balance", sub: "Preflight planning" },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-center"
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <h3 className="text-sm font-bold text-brand mb-1">{card.title}</h3>
              <p className="text-xs text-gray-500">{card.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-brand">
                Latest Study Guides
              </h2>
              <Link
                href="/blog"
                className="text-brand-light font-medium hover:underline text-sm"
              >
                View all articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-brand-light px-2 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-light transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl font-bold text-brand mb-4">
          Ready to Practice the Full Oral?
        </h2>
        <p className="text-gray-600 mb-8">
          Reading isn't enough. Practice with an AI that acts like your DPE —
          asks follow-up questions, challenges your answers, and prepares you
          for the real thing.
        </p>
        <a
          href="https://simulatedcheckride.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
        >
          Try SimulatedCheckride.com →
        </a>
        <p className="text-gray-400 text-sm mt-3">$59.99/session · Full oral exam simulation</p>
      </section>
    </>
  );
}
