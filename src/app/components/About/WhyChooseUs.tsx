"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Expertise diversifiée",
      description: "De la gestion des médias sociaux à la vidéographie et au design, notre équipe maîtrise un éventail complet de compétences pour offrir des solutions complètes.",
      icon: "mdi:lightbulb-on",
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      title: "Approche personnalisée",
      description: "Nous comprenons que chaque entreprise a des besoins uniques. C'est pourquoi nous élaborons des stratégies sur mesure qui s'alignent parfaitement sur vos objectifs.",
      icon: "mdi:account-cog",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Résultats tangibles",
      description: "Nous mesurons notre succès par les résultats tangibles que nous obtenons pour nos clients. Votre succès est notre plus grande motivation.",
      icon: "mdi:chart-bar",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Pourquoi choisir
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              Taguini Marketing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des avantages compétitifs qui font la différence pour votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={reason.icon} className="text-white text-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;