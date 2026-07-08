import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Blog",
  description:
    "My notes on backend development — APIs, databases, authentication, and server architecture.",
};

export default function BackendBlogPage() {
  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-bold text-gray-800">
        Backend Development Notes
      </h2>
      <p className="mt-4 text-gray-600">
        Backend development taught me how data flows behind the scenes.
        Topics I&apos;ve been diving into include:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
        <li>Designing REST APIs and understanding HTTP methods.</li>
        <li>Working with relational and NoSQL databases.</li>
        <li>Implementing authentication and authorization.</li>
        <li>Structuring server-side code for scalability.</li>
      </ul>
      <p className="mt-4 text-gray-600">
        Understanding the backend has made me a much stronger full-stack
        developer, since I can now reason about how frontend requests are
        actually handled and stored.
      </p>
    </article>
  );
}
