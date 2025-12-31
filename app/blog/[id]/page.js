import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import BlogDetailsCard from "@/app/components/BlogDetailsCard";

export default async function BlogDetails({ params }) {
  // Await params dans Next.js 15+
  const { id } = await params;

  const post = blogPosts.find((p) => String(p.id) === String(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <BlogDetailsCard post={post} />
    </main>
  );
}
