// src/app/(site)/services/[slug]/not-found.tsx
"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-red-500/10 blur-2xl" />
            </div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-red-600">
              <Icon icon="mdi:briefcase-off" className="text-4xl text-white" />
            </div>
          </div>

          {/* Error Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6">
            <Icon icon="mdi:alert" className="text-red-500 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
              Service Non Trouvé
            </span>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Service Indisponible
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Le service que vous recherchez n'existe pas ou a été déplacé. 
            Découvrez nos autres services pour booster votre présence digitale.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            >
              <Icon icon="mdi:arrow-left" className="text-lg" />
              Voir tous nos services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300"
            >
              <Icon icon="mdi:chat-processing-outline" className="text-lg" />
              Nous contacter
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Vous cherchez un service spécifique ?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Conception Graphique",
                "Motion Design",
                "Vidéographie",
                "Création de Contenu",
                "Publicité",
                "Gestion des Médias Sociaux"
              ].map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}