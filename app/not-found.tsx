import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-4 text-gray-600">
        Looks like this page doesn&apos;t exist yet — maybe it&apos;s still
        part of my future learning journey!
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
