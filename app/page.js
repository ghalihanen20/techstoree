import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-white bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl text-center text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          TechStore – High-Tech & Innovation
        </h1>

        <p className="text-lg mb-8">
          Découvrez les meilleurs produits technologiques au meilleur prix.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/produits"
            className="px-6 py-3 bg-primary hover:bg-yellow-600 rounded-md font-semibold transition"
          >
            Produits
          </Link>

          <Link
            href="/inscription"
            className="px-6 py-3 bg-secondary hover:bg-lime-700 rounded-md font-semibold transition"
          >
            S’inscrire
          </Link>
        </div>
      </div>
    </section>
  );
}
