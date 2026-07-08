import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest notes and reflections on frontend, backend, and mobile development.",
};

const posts = [
  {
    href: "/blog/frontend",
    title: "Frontend Development",
    excerpt:
      "Notes on React, Next.js, Tailwind CSS, and building great user interfaces.",
  },
  {
    href: "/blog/backend",
    title: "Backend Development",
    excerpt:
      "Learning APIs, databases, authentication, and server-side architecture.",
  },
  {
    href: "/blog/mobile",
    title: "Mobile Development",
    excerpt:
      "Exploring React Native and building cross-platform mobile apps.",
  },
];

export default function BlogPage() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">All Posts</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="block rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:border-primary/40"
          >
            <h3 className="mb-2 text-lg font-semibold text-primary">
              {post.title}
            </h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
