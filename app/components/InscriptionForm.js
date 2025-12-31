"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* 🔒 Schéma Yup */
const schema = yup.object({
  nom: yup.string().required("Nom obligatoire").min(5, "Minimum 5 caractères"),

  cin: yup
    .string()
    .required("CIN obligatoire")
    .matches(/^[0-9]{8}$/, "Le CIN doit contenir 8 chiffres"),

  password: yup
    .string()
    .required("Mot de passe obligatoire")
    .min(6, "Minimum 6 caractères"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Confirmation obligatoire"),

  accept: yup.boolean().oneOf([true], "Vous devez accepter les conditions"),
});

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Inscription réussie");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-lg mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Inscription
      </h2>

      <div>
        <input
          placeholder="Nom"
          {...register("nom")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.nom && (
          <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="CIN"
          {...register("cin")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.cin && (
          <p className="text-red-500 text-sm mt-1">{errors.cin.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirmation mot de passe"
          {...register("confirmPassword")}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          {...register("accept")}
          className="mt-1 w-4 h-4 text-primary focus:ring-2 focus:ring-primary"
        />
        <span className="text-gray-700 text-sm">
          J&apos;accepte les conditions
        </span>
      </div>
      {errors.accept && (
        <p className="text-red-500 text-sm -mt-2">{errors.accept.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors text-lg"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
