import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p>TechStore © 2025</p>

        <Link
          href="/contact"
          className="hover:text-secondary transition-colors"
        >
          Contactez-nous
        </Link>

        <div className="flex gap-4">
          <a href="#" className="hover:text-secondary">
            Facebook
          </a>
          <a href="#" className="hover:text-secondary">
            Instagram
          </a>
          <a href="#" className="hover:text-secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
