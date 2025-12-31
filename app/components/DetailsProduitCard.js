"use client";

import Link from "next/link";

export default function DetailsProduitCard({ produit }) {
  const handleAcheter = () => {
    alert("Commande confirmée");
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Bouton retour */}
      <Link
        href="/produits"
        className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-6 font-medium"
      >
        ← Retour aux produits
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Image du produit */}
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8">
            <div className="w-full h-96 flex items-center justify-center">
              <img
                src={`/${produit.image}`}
                alt={produit.nom}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Détails du produit */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Catégorie */}
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {produit.categorie}
              </span>

              {/* Nom du produit */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {produit.nom}
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {produit.description}
              </p>

              {/* Prix */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 mb-6">
                <p className="text-gray-600 text-sm mb-1">Prix</p>
                <p className="text-4xl md:text-5xl font-bold text-yellow-600">
                  {produit.prix} DT
                </p>
              </div>

              {/* Informations supplémentaires */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  Informations produit
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Garantie constructeur
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Livraison disponible
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Service après-vente
                  </li>
                </ul>
              </div>
            </div>

            {/* Bouton d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAcheter}
                className="flex-1 bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
