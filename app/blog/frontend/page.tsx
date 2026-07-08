import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Blog",
  description:
    "My notes and lessons learned on frontend development with React, Next.js, and Tailwind CSS.",
};

export default function FrontendBlogPage() {
  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-bold text-gray-800">
        Frontend Development Notes
      </h2>
      <p className="mt-4 text-gray-600">
        Frontend development is all about crafting the experience users
        directly interact with. Over the past few months, I&apos;ve focused
        on:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
        <li>Building components with React and understanding hooks.</li>
        <li>
          Using Next.js App Router for routing, layouts, and server
          components.
        </li>
        <li>Styling efficiently with Tailwind CSS utility classes.</li>
        <li>Making interfaces responsive and accessible.</li>
      </ul>
      <p className="mt-4 text-gray-600">
        The biggest lesson so far: consistency in design (fonts, spacing,
        colors) makes an app feel far more professional, even before adding
        complex features.
      </p>
    </article>
  );
}
