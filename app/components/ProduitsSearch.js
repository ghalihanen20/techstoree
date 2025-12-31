"use client";

import { useState } from "react";
import ProduitList from "./ProduitList";

export default function ProduitsSearch({ produits }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProduits = produits.filter(
    (p) =>
      p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-12">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un produit..."
        className="w-full p-4 mb-8 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Liste des produits filtrés */}
      <ProduitList produits={filteredProduits} />
    </div>
  );
}
