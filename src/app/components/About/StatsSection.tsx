"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "3+",
      label: "Ans d'expérience",
      description: "Expertise acquise depuis notre création",
      icon: "mdi:calendar",
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      value: "600+",
      label: "Clients",
      description: "Entreprises accompagnées vers le succès",
      icon: "mdi:account-group",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      value: "2000+",
      label: "Publicités",
      description: "Campagnes gérées avec succès",
      icon: "mdi:bullhorn",
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      value: "100+",
      label: "Projets",
      description: "Réalisations concrètes et satisfaisantes",
      icon: "mdi:check-circle",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white block">
              Taguini Marketing
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
              en Chiffres
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre engagement envers l'excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <Icon icon={stat.icon} className="text-white text-2xl" />
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-medium mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full">
            <span className="font-semibold">Commencez le défi !</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;