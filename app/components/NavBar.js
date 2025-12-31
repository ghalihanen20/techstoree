"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src="/logo.png" alt="logo" />
          <span className="font-montserrat font-semibold text-primary">
            TechStore – High-Tech & Innovation
          </span>
        </div>

        {/* Bouton Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary text-3xl"
        >
          ☰
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 font-montserrat text-primary">
          <li>
            <Link href="/" className="hover:text-secondary">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/produits" className="hover:text-secondary">
              Produits
            </Link>
          </li>
          <li>
            <Link href="/inscription" className="hover:text-secondary">
              Inscription
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>
          </li>
        </ul>

        {/* bouton desktop */}
        <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
          Connexion
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 font-montserrat text-primary">
          <Link href="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link href="/produits" onClick={() => setOpen(false)}>
            Produits
          </Link>
          <Link href="/inscription" onClick={() => setOpen(false)}>
            Inscription
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>

          <button className="bg-primary text-white px-4 py-2 rounded-md w-full">
            Inscription
          </button>
        </div>
      )}
    </nav>
  );
}
