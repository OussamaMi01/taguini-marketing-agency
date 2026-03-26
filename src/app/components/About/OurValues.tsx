"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const OurValues = () => {
  const values = [
    {
      id: 1,
      title: "Passion",
      description: "Nous sommes passionnés par le marketing digital et par l'accompagnement de nos clients vers le succès.",
      icon: "mdi:heart",
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      title: "Engagement",
      description: "Nous nous engageons à fournir des résultats exceptionnels et à dépasser vos attentes.",
      icon: "mdi:handshake",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Créativité",
      description: "Nous innovons constamment pour offrir des solutions créatives et impactantes.",
      icon: "mdi:palette",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.",
      icon: "mdi:account-group",
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Partage",
      description: "Nous partageons nos connaissances et notre expertise pour contribuer au succès collectif.",
      icon: "mdi:share-variant",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Nos valeurs au cœur
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              de toutes nos actions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Les principes qui guident notre travail au quotidien et notre relation avec nos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={value.icon} className="text-white text-xl" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;