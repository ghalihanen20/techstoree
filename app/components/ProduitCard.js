import Link from "next/link";

export default function ProduitCard({ produit }) {
  return (
    <Link href={`/produits/${produit.id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Image avec hauteur fixe */}
        <div className="w-full h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={`/${produit.image}`}
            alt={produit.nom}
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* Contenu */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Catégorie */}
          <span className="text-xs font-medium text-yellow-600 uppercase tracking-wide mb-2">
            {produit.categorie}
          </span>

          {/* Nom du produit */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
            {produit.nom}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {produit.description}
          </p>

          {/* Prix et bouton */}
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <span className="text-2xl font-bold text-yellow-600">
              {produit.prix} DT
            </span>
            <span className="text-sm text-yellow-500 hover:text-yellow-700 font-medium flex items-center">
              Voir détails
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
