import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Development Blog",
  description:
    "My notes on learning mobile app development with React Native and cross-platform tools.",
};

export default function MobileBlogPage() {
  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-bold text-gray-800">
        Mobile Development Notes
      </h2>
      <p className="mt-4 text-gray-600">
        Mobile development opened up a whole new way of thinking about user
        experience. So far, I&apos;ve explored:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
        <li>Building cross-platform apps with React Native.</li>
        <li>Understanding navigation patterns unique to mobile.</li>
        <li>Handling device features like camera and location.</li>
        <li>Optimizing performance for smaller, resource-limited devices.</li>
      </ul>
      <p className="mt-4 text-gray-600">
        Since I already knew React, moving into React Native felt natural —
        the biggest adjustment was learning platform-specific UI
        considerations.
      </p>
    </article>
  );
}
