"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* 🔒 Schéma de validation Yup */
const schema = yup.object({
  name: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),

  email: yup.string().email("Email invalide").required("Email obligatoire"),

  telephone: yup
    .string()
    .required("Numéro de téléphone obligatoire")
    .matches(/^[0-9]{8}$/, "Le numéro doit contenir exactement 8 chiffres"),

  message: yup
    .string()
    .required("Message est obligatoire")
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(30, "Le message ne doit pas dépasser 30 caractères"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Données envoyées :", data);
    reset();
    alert("Message envoyé avec succès !");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full"
    >
      {/* Nom */}
      <div>
        <input
          type="text"
          placeholder="Nom"
          {...register("name")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <input
          type="text"
          placeholder="Téléphone"
          {...register("telephone")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.telephone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.telephone.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Message"
          rows="5"
          {...register("message")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors text-lg"
      >
        Envoyer
      </button>
    </form>
  );
}
