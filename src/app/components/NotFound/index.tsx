// src/app/not-found.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                 <div className="pt-16 lg:pt-20" />

      {/* Hero Section with 404 Error */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
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
          
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5 dark:opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Animated Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
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
                className="inline-flex items-center justify-center"
              >

                <div className="relative">
                  <span className="text-8xl md:text-9xl lg:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                    404
                  </span>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 md:-top-8 md:-right-8"
                  >
                    <Icon icon="mdi:alert-circle" className="text-4xl md:text-6xl text-red-500 dark:text-red-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            {/* Main Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Oups ! La page que vous cherchez
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                {" "}n'existe pas
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              La page que vous recherchez a peut-être été déplacée, supprimée, 
              ou n'a jamais existé. Ne vous inquiétez pas, nous sommes là pour vous aider à retrouver votre chemin.
            </motion.p>

            {/* Suggestions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              {[
                {
                  icon: "mdi:home",
                  title: "Retour à l'accueil",
                  description: "Revenir à la page principale",
                  href: "/",
                  color: "from-red-500 to-red-600"
                },
                {
                  icon: "mdi:briefcase",
                  title: "Nos Services",
                  description: "Découvrir nos solutions marketing",
                  href: "/services",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: "mdi:email",
                  title: "Nous Contacter",
                  description: "Discuter de votre projet",
                  href: "/contact",
                  color: "from-green-500 to-green-600"
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon icon={item.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </Link>
              ))}
            </motion.div>

           

            {/* Help Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Besoin d'aide ? 
              <Link href="/contact" className="text-red-500 dark:text-red-400 hover:underline ml-1">
                Contactez notre équipe
              </Link>
            </motion.p>

          </div>
        </div>

       
      </section>

    </div>
  );
};

export default NotFound;