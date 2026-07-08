export default function BlogLoading() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="h-6 w-40 rounded bg-gray-200" />
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-32 rounded-xl border border-gray-200 bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}
