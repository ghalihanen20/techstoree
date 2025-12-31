import { produits } from "@/data/produits";
import ProduitList from "@/app/components/ProduitList";
import ProduitsSearch from "@/app/components/ProduitsSearch";

export const metadata = {
  title: "Nos Produits - TechStore",
  description:
    "Découvrez les meilleurs produits technologiques au meilleur prix.",
};

export default function ProduitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Nos Produits
          </h1>
        </div>
      </section>

      {/* Section recherche + produits */}
      <section className="container mx-auto px-4 py-12">
        <ProduitsSearch produits={produits} />
      </section>
    </div>
  );
}
