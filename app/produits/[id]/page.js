import { produits } from "@/data/produits";
import { notFound } from "next/navigation";
import DetailsProduitCard from "@/app/components/DetailsProduitCard";

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = produits.find(
    (p) => String(p.id) === String(resolvedParams.id)
  );

  if (!product) {
    return {
      title: "Produit introuvable - TechStore",
      description: "Le produit que vous recherchez n'a pas été trouvé.",
    };
  }

  return {
    title: `${product.nom} - TechStore`,
    description: product.description,
    keywords: `${product.nom}, ${product.categorie}, innovation, Tunisie`,
    openGraph: {
      title: product.nom,
      description: product.description,
      images: [`/${product.image}`],
    },
  };
}

// Page principale
export default async function ProductDetailsPage({ params }) {
  const resolvedParams = await params;
  const product = produits.find(
    (p) => String(p.id) === String(resolvedParams.id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <DetailsProduitCard produit={product} />
    </main>
  );
}
