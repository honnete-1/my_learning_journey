"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { href: "/blog/frontend", label: "Frontend Development" },
  { href: "/blog/backend", label: "Backend Development" },
  { href: "/blog/mobile", label: "Mobile Development" },
];

export default function BlogSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 md:w-64">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary-dark">
          Blog Categories
        </h2>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/blog"
              className={`block rounded px-3 py-2 text-sm font-medium ${
                pathname === "/blog"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary/10"
              }`}
            >
              All Posts
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className={`block rounded px-3 py-2 text-sm font-medium ${
                  pathname === cat.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary/10"
                }`}
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
