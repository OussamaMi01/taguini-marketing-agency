// src/app/components/Blog/UnderConstruction.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <>
      {/* Hero Section - Matching marketing agency style */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl"
          />
          
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-500/30 dark:border-red-400/30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-500/30 dark:border-red-400/30" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="pt-16 lg:pt-20" />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Conseils et Stratégies
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                {" "}Marketing Digital
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Découvrez nos prochains articles sur les dernières tendances, conseils d'experts et stratégies gagnantes pour booster votre présence en ligne.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Under Construction Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Construction Icon with Animation */}
            <div className="relative mb-8">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20"
              >
                <Icon icon="mdi:construction" className="text-6xl text-red-500 dark:text-red-400" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2"
              >
                <Icon icon="mdi:hard-hat" className="text-3xl text-yellow-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2"
              >
                <Icon icon="mdi:hammer-wrench" className="text-3xl text-orange-500" />
              </motion.div>
            </div>

            {/* Main Message */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Blog en cours de construction
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Nous préparons du contenu exceptionnel pour vous !
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Notre équipe travaille activement sur des articles riches en conseils, stratégies et 
                actualités du marketing digital pour vous aider à booster votre présence en ligne.
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md mx-auto mb-8"
            >
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progression</span>
                <span>50%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                />
              </div>
            </motion.div>

            {/* What's Coming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left"
            >
              {[
                {
                  icon: "mdi:trending-up",
                  title: "Stratégies Marketing",
                  description: "Articles détaillés sur les stratégies digitales gagnantes"
                },
                {
                  icon: "mdi:content-copy",
                  title: "Création de Contenu",
                  description: "Conseils pour créer du contenu qui convertit"
                },
                {
                  icon: "mdi:chart-line",
                  title: "Analyses & Études",
                  description: "Études de cas et analyses de marché"
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4 mx-auto">
                    <Icon icon={item.icon} className="text-2xl text-red-500 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-8 mb-8"
            >
              <Icon icon="mdi:email-newsletter" className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Restez informé(e)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Soyez le premier à être informé de la publication de nos nouveaux articles
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all whitespace-nowrap"
                >
                  M'avertir
                </button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Pas de spam, désinscription à tout moment
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300"
              >
                <Icon icon="mdi:chat-processing-outline" className="text-xl" />
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
              >
                <Icon icon="mdi:rocket" className="text-xl" />
                Découvrir nos services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default UnderConstruction;