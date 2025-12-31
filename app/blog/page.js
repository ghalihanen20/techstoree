import { blogPosts } from "@/data/blogPosts";
import BlogPostCard from "@/app/components/BlogPostCard";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-primary">
          Notre Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
