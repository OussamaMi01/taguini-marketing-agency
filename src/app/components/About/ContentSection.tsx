"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ContentSection = () => {
  const sections = [
    {
      id: 1,
      title: "Accompagnement en Marketing Digital, Tunisie",
      description: "Depuis septembre 2021, notre boîte de communication digitale en Tunisie, spécialisée dans le marketing digital, a eu le privilège d'accompagner plus de 500 structures dans leur parcours vers le succès. Nous comprenons l'importance du marketing digital pour chaque entreprise unique. C'est pourquoi nous nous efforçons de créer des solutions sur mesure et créatives, optimisées pour les besoins spécifiques de nos clients.",
      icon: "mdi:account-group",
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Un contenu stratégique pour se démarquer",
      description: "Découvrez notre approche unique basée sur la création de contenu stratégique et captivant, spécialement conçu pour attirer et engager votre public cible. Que ce soit à travers une gestion experte des médias sociaux, la production de contenu de qualité, la création de vidéos percutantes ou la conception graphique innovante, nous déployons des stratégies qui vous assurent de vous démarquer de la concurrence.",
      icon: "mdi:chart-line",
      color: "from-purple-500 to-purple-600",
      highlight: "Se démarquer de la concurrence",
    },
    {
      id: 3,
      title: "Des résultats concrets qui vous satisfont",
      description: "En collaborant avec l'agence de marketing digital, Taguini Marketing, vous bénéficiez d'une expertise pointue dans le domaine, d'une attention aux détails et d'un engagement total envers des résultats concrets. Fiers de travailler en étroite collaboration avec nos clients, nous nous assurons de comprendre parfaitement leurs objectifs commerciaux pour les traduire efficacement en actions tangibles.",
      icon: "mdi:check-circle",
      color: "from-orange-500 to-orange-600",
      highlight: "Des résultats concrets",
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
              Notre
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              Approche
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer vos idées en succès digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center mb-6`}>
                <Icon icon={section.icon} className="text-white text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>

              {/* Highlight */}
              {section.highlight && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 text-red-600 dark:text-red-400 text-sm font-medium">
                    {section.highlight}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.description}
              </p>

              {/* Decorative Corner */}
              <div className={`mt-6 pt-6 border-t border-gray-200 dark:border-gray-700`}>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Icon icon="mdi:clock-outline" />
                  <span>Depuis 2021</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Si vous êtes prêt à donner un coup de pouce à votre présence en ligne et à voir votre entreprise prospérer, 
            nous sommes là pour vous aider.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;