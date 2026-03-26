"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SinglePlan from "./SinglePlan";

interface Plan {
  id: string;
  type: string;
  price: string;
  period: string;
  color: string;
  text: string;
  benefits: string[];
  features: string[];
}

const Plan = () => {
  const [enabled, setEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  
  // Local plans data
  const MonthlyPlans: Plan[] = [
    {
      id: "bronze",
      type: "Pack Bronze",
      price: "À partir de 299",
      period: "Mensuel",
      color: "bronze",
      text: "8 Publications par mois",
      benefits: [
        "2 Vidéos professionnelles",
        "6 publications créatives",
        "6 publications affiche (chaque publication de 1 à 3 affiches)",
        "Texte publicitaire optimisé",
        "Rapport Mensuel détaillé",
        "Gestion de 1 plateforme sociale",
        "Réponse aux commentaires",
        "Stratégie de contenu de base"
      ],
      features: [
        "2 Vidéos",
        "6 Publications",
        "Rapport Mensuel",
        "1 Plateforme"
      ]
    },
    {
      id: "silver",
      type: "Pack Silver",
      price: "À partir de 499",
      period: "Mensuel",
      color: "silver",
      text: "12 Publications par mois",
      benefits: [
        "4 Vidéos professionnelles",
        "8 publications créatives",
        "8 publications affiche (chaque publication de 1 à 3 affiches)",
        "Texte publicitaire optimisé",
        "Rapport Mensuel détaillé",
        "Gestion de 2 plateformes sociales",
        "Réponse aux commentaires",
        "Stratégie de contenu avancée",
        "Analyse de la concurrence",
        "Suggestions d'amélioration"
      ],
      features: [
        "4 Vidéos",
        "8 Publications",
        "Rapport Mensuel",
        "2 Plateformes",
        "Analyse Concurrence"
      ]
    },
    {
      id: "gold",
      type: "Pack Gold",
      price: "À partir de 799",
      period: "Mensuel",
      color: "gold",
      text: "16 Publications par mois",
      benefits: [
        "6 Vidéos professionnelles",
        "10 publications créatives",
        "10 publications affiche (chaque publication de 1 à 5 affiches)",
        "Texte publicitaire optimisé",
        "Rapport Mensuel détaillé",
        "Gestion de 3 plateformes sociales",
        "Réponse aux commentaires",
        "Stratégie de contenu premium",
        "Analyse de la concurrence approfondie",
        "Suggestions d'amélioration hebdomadaires",
        "Community Management actif",
        "Campagnes publicitaires basiques incluses"
      ],
      features: [
        "6 Vidéos",
        "10 Publications",
        "Rapport Mensuel",
        "3 Plateformes",
        "Analyse Concurrence",
        "Community Management",
        "Campagnes Pub"
      ]
    }
  ];

  const yearlyPlans: Plan[] = MonthlyPlans.map(plan => ({
    ...plan,
    price: `À partir de ${Math.round(parseInt(plan.price.match(/\d+/)?.[0] || '0') * 10 * 0.8)}`,
    period: "Annuel",
    text: plan.text.replace("Mensuel", "Annuel"),
    benefits: [...plan.benefits, "Économisez 20% avec l'abonnement annuel"]
  }));

  const plans = enabled ? yearlyPlans : MonthlyPlans;

  const openModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/5 to-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6">
            <Icon icon="mdi:tag" className="text-red-500 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
              Nos Offres Exclusives
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Nos packs de gestion
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              des médias sociaux
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Boostez votre présence en ligne avec nos packs exclusifs de gestion des médias sociaux 
            chez Taguini Marketing, l'Agence de Communication Digitale, votre partenaire de succès.
          </p>

          {/* Toggle Switch */}
          <div className="mt-10 mb-6">
            <div className="flex justify-center items-center gap-4">
              <label
                htmlFor="switch"
                className="text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                Mensuel
              </label>
              <Switch
                checked={enabled}
                id="switch"
                onChange={setEnabled}
                className="group relative inline-flex h-7 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors data-[checked]:bg-red-500"
              >
                <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7 shadow-lg" />
              </Switch>
              <label
                htmlFor="switch"
                className="text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                Annuel <span className="text-red-500 text-sm">(Économisez 20%)</span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <SinglePlan key={plan.id} plan={plan} onSelect={openModal} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-block p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                <Icon icon="mdi:shield-check" className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Pourquoi choisir nos packs ?
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Tous nos packs incluent une stratégie personnalisée, du contenu optimisé pour chaque plateforme, 
              et des rapports détaillés pour mesurer votre ROI. Notre équipe d'experts est dédiée à votre succès.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal - You can keep your existing modal or simplify it */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Souscrire au {selectedPlan.type}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Remplissez vos informations pour commencer avec le {selectedPlan.type}.
              </p>
              
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Pack:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{selectedPlan.type}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Période:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{selectedPlan.period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Prix:</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{selectedPlan.price} DH</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={closeModal}
              className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all"
            >
              Confirmer la souscription
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
              Un conseiller vous contactera dans les 24h pour finaliser votre inscription.
            </p>
          </div>
        </div>
      )}

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/20 dark:border-red-400/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/20 dark:border-red-400/20" />
    </section>
  );
};

export default Plan;