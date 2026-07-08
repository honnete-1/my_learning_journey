export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Learning Journey. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-secondary-light">Built with Next.js</span>
            <span>&middot;</span>
            <span className="text-secondary-light">Styled with Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
