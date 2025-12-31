//app/components/BlogPostCard
import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={post.image}
        alt={post.titre}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <span className="text-gray-500 text-sm">{post.date}</span>

        <h2 className="text-xl font-bold mt-2 mb-3 text-primary">
          {post.titre}
        </h2>

        <p className="text-gray-600 mb-4">{post.extrait}</p>

        <Link
          href={`/blog/${post.id}`}
          className="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded"
        >
          Lire plus
        </Link>
      </div>
    </div>
  );
}
