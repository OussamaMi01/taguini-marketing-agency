"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const MissionVision = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                <Icon icon="mdi:target" className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                Notre Mission
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Notre mission est d'être le partenaire de confiance de nos clients, en leur offrant des services 
              de marketing numérique de haute qualité, des stratégies sur mesure et une expertise approfondie 
              pour les aider à réussir leur transformation numérique et à atteindre leurs objectifs spécifiques.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Icon icon="mdi:eye" className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                Notre Vision
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Être le leader incontesté du marketing numérique est notre vision, en fournissant des solutions 
              innovantes et en aidant nos clients à atteindre l'excellence en ligne. Nous cherchons à repousser 
              les limites, à créer un impact significatif et à établir des partenariats solides avec nos clients 
              dans leur parcours vers le succès numérique.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          <Icon icon="mdi:star" className="text-red-500 mx-4 text-2xl" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Agence de Marketing Digital basée à Sfax
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            En tant que boîte de communication digitale en Tunisie, notre équipe dynamique d&apos;experts 
            passionnés par le marketing digital vous aide à renforcer votre présence en ligne pour atteindre 
            vos objectifs de notoriété et de croissance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;