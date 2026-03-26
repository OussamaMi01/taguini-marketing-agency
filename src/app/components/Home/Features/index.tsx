"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [counts, setCounts] = useState({
    clients: 0,
    ads: 0,
    projects: 0
  });

  // Target values for counters
  const targetCounts = {
    clients: 900,
    ads: 5000,
    projects: 200
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const leftAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "-10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };

  const rightAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };

  // Animate counters when in view
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCounter = (key: keyof typeof targetCounts, target: number) => {
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);

        return timer;
      };

      const timer1 = animateCounter('clients', targetCounts.clients);
      const timer2 = animateCounter('ads', targetCounts.ads);
      const timer3 = animateCounter('projects', targetCounts.projects);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
      };
    }
  }, [inView]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/5 to-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Achievement Counters - New Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-4">
                <Icon icon="mdi:trophy" className="text-red-500 dark:text-red-400" />
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                  Nos Réalisations
                </span>
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Chiffres qui parlent d'eux-mêmes
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Des années d'expertise et de confiance client
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Clients Counter */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-center group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon icon="mdi:account-group" className="text-white text-3xl" />
                  </div>
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                      <span className="text-red-500">+</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {counts.clients.toLocaleString()}
                      </motion.span>
                    </div>
                    <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      Clients
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                      Entreprises qui nous font confiance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Ads Counter */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                className="text-center group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon icon="mdi:bullhorn" className="text-white text-3xl" />
                  </div>
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                      <span className="text-red-500">+</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {counts.ads.toLocaleString()}
                      </motion.span>
                    </div>
                    <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      Publicités
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                      Campagnes publicitaires réussies
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Projects Counter */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                className="text-center group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon icon="mdi:rocket-launch" className="text-white text-3xl" />
                  </div>
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                      <span className="text-red-500">+</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {counts.projects.toLocaleString()}
                      </motion.span>
                    </div>
                    <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      Projets
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                      Réalisations complétées avec succès
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Original Features Content */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <motion.div {...leftAnimation} className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/services/banner.webp"
                alt="Notre expertise en marketing digital"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
                quality={90}
              />
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-red-500/30 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-red-500/30 rounded-br-2xl" />
            </div>
          </motion.div>

          <motion.div {...rightAnimation} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6">
              <Icon icon="mdi:sparkles" className="text-red-500 dark:text-red-400" />
              <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                Pourquoi nous choisir ?
              </span>
            </span>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ce qui nous rend <span className="text-red-500">unique</span>
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Une approche sur-mesure combinant créativité, stratégie et résultats mesurables pour propulser votre entreprise.
            </p>

            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon="tabler:circle-check"
                    width="24"
                    height="24"
                    className="text-red-500 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Expertise Sectorielle</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Une connaissance approfondie de votre secteur d'activité pour des stratégies adaptées.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon="tabler:circle-check"
                    width="24"
                    height="24"
                    className="text-red-500 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Résultats Mesurables</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Des rapports détaillés et transparents pour suivre chaque euro investi.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon="tabler:circle-check"
                    width="24"
                    height="24"
                    className="text-red-500 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Approche Créative</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Des solutions innovantes qui font la différence sur un marché saturé.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon="tabler:circle-check"
                    width="24"
                    height="24"
                    className="text-red-500 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Support 24/7</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Une équipe dédiée toujours disponible pour répondre à vos besoins.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/25 dark:hover:shadow-red-600/25 transition-all duration-300"
              >
                <span>Découvrir nos services</span>
                <Icon 
                  icon="mdi:arrow-right" 
                  className="group-hover:translate-x-1 transition-transform text-xl" 
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/20 dark:border-red-400/20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/20 dark:border-red-400/20 hidden lg:block" />
    </section>
  );
};

export default Features;