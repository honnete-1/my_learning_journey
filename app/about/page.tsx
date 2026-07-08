import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about my background, why I started learning to code, and the goals driving my development journey.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-primary-dark">About Me</h1>

      <div className="mt-8 space-y-6 text-gray-700">
        <p>
          Hello! I&apos;m a self-driven learner passionate about technology
          and building things that make life easier. My journey into
          programming started with curiosity about how websites and apps
          actually work, and it quickly grew into a genuine love for solving
          problems with code.
        </p>

        <h2 className="text-2xl font-semibold text-primary">My Journey</h2>
        <p>
          I began by learning the fundamentals of HTML, CSS, and JavaScript.
          From there, I moved on to modern frameworks like React and Next.js
          to build fast, SEO-friendly web applications. Along the way,
          I&apos;ve also explored backend development and mobile app
          development to become a well-rounded developer.
        </p>

        <h2 className="text-2xl font-semibold text-primary">My Goals</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Master the Next.js App Router and modern React patterns.</li>
          <li>Build and deploy full-stack applications end-to-end.</li>
          <li>Contribute to open-source projects.</li>
          <li>Eventually build my own SaaS product.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary">Why This Site</h2>
        <p>
          This website itself is part of my learning journey — a hands-on
          project to practice the Next.js App Router, Tailwind CSS, layouts,
          and SEO best practices.
        </p>
      </div>
    </div>
  );
}
