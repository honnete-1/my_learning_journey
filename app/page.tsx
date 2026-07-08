import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my learning journey — follow along as I learn frontend, backend, and mobile development.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-primary-dark sm:text-5xl">
          Hi, I&apos;m a Developer in the Making 👋
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">
          Welcome to my learning journey! This site documents how I&apos;m
          growing my skills in web and mobile development — one project at a
          time. Explore my story, goals, and blog to follow along.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/about" variant="primary">
            Learn About Me
          </Button>
          <Button href="/blog" variant="outline">
            Read My Blog
          </Button>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold text-primary">
            Frontend
          </h3>
          <p className="text-gray-600">
            Learning React, Next.js, and Tailwind CSS to build modern
            interfaces.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold text-primary">
            Backend
          </h3>
          <p className="text-gray-600">
            Exploring APIs, databases, and server-side logic to power real
            apps.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold text-primary">
            Mobile
          </h3>
          <p className="text-gray-600">
            Building cross-platform mobile experiences with React Native.
          </p>
        </div>
      </section>
    </div>
  );
}
