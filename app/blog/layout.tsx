import BlogHeader from "@/components/BlogHeader";
import BlogSidebar from "@/components/BlogSidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <BlogHeader />
      <div className="flex flex-col gap-8 md:flex-row">
        <BlogSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
