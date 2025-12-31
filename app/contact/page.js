import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        Contactez-nous
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulaire */}
        <ContactForm />

        {/* ℹ️ Informations de contact */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <img
            src="/images/contact.jfif"
            alt="Contact"
            className="w-full h-64 object-cover rounded-lg"
          />

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">📍</span>
              <div>
                <strong className="text-gray-900">Adresse :</strong>
                <p className="text-gray-600">123 Rue Exemple, Tunis</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">📞</span>
              <div>
                <strong className="text-gray-900">Téléphone :</strong>
                <p className="text-gray-600">+216 22 333 444</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">📧</span>
              <div>
                <strong className="text-gray-900">Email :</strong>
                <p className="text-gray-600">contact@techstore.tn</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              Horaires d&apos;ouverture
            </h3>
            <p className="text-gray-600">Lundi - Vendredi : 9h00 - 18h00</p>
            <p className="text-gray-600">Samedi : 9h00 - 13h00</p>
            <p className="text-gray-600">Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </main>
  );
}
