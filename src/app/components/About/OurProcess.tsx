"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Découvrir",
      description: "Nous entamons un dialogue approfondi avec vous pour saisir votre vision et vos valeurs. Cette phase de découverte nous permet d'identifier vos points forts, vos défis et vos opportunités.",
      year: "2022",
      icon: "mdi:search",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      step: "02",
      title: "Exécuter",
      description: "Une fois la stratégie élaborée, nous passons à l'étape de l'exécution. Notre équipe talentueuse met en œuvre les plans convenus avec précision et créativité.",
      icon: "mdi:rocket",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      step: "03",
      title: "Développer",
      description: "Nous accordons une grande importance à l'adaptation continue. Dans cette phase, nous surveillons attentivement les performances de vos campagnes.",
      icon: "mdi:chart-line",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      step: "04",
      title: "Supporter",
      description: "Notre engagement envers vous ne se termine pas avec la livraison d'une campagne. Nous croyons en la création de relations à long terme.",
      icon: "mdi:headphones",
      color: "from-red-500 to-red-600",
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
              Notre processus pour
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              votre succès
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une méthodologie structurée en 4 étapes pour garantir des résultats optimaux
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-red-500 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <span className="text-white text-2xl font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        {step.year && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Depuis {step.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Services */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                          Analyse
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                          Stratégie
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                          Exécution
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} border-4 border-white dark:border-gray-900`}></div>
                </div>

                {/* Empty Space for alignment */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Prêt à élever votre entreprise vers de nouveaux sommets dans l'ère digitale ?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300">
            Commencez le défi !
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;