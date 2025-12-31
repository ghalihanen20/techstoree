//app/components/BlogDetailsCard
"use client";

import Link from "next/link";

export default function BlogDetailsCard({ post }) {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      {/* Bouton retour */}
      <Link
        href="/blog"
        className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-6 font-medium"
      >
        ← Retour au blog
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.titre}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">
          {/* Date */}
          <span className="text-gray-500">{post.date}</span>

          {/* Titre */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            {post.titre}
          </h1>

          {/* Contenu */}
          <p className="text-gray-700 text-lg leading-relaxed">
            {post.contenu}
          </p>
        </div>
      </div>
    </div>
  );
}
