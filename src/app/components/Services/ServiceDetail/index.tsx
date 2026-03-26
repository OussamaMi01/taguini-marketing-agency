// src/app/components/ServiceDetail/index.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
  benefits?: string[];
}

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
  image?: string;
  features?: ServiceFeature[];
  problems?: ServiceFeature[];
  services?: ServiceFeature[];
  process?: any[];
  faq?: any[];
  cta: string;
}

export interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Service non trouvé
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Le service que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <Link
          href="/services"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          Voir tous nos services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
       <div className="pt-16 lg:pt-20" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
           
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              {service.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300"
              >
                Demander un devis
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300"
              >
                Voir des exemples
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-xl"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {service.title} avec Passion
                </h2>
                <div className="space-y-4">
                  {service.detail.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Ce que nous offrons
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Icon icon="mdi:check-circle" className="text-red-500 dark:text-red-400 text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Problems Section (for content creation service) */}
      {service.problems && service.problems.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Problèmes résolus par la {service.title.toLowerCase()}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <span className="text-blue-500 dark:text-blue-400 font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {problem.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {problem.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sub-services Section */}
      {service.services && service.services.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Nos Services de {service.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.services.map((subService, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {subService.icon && (
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Icon icon={subService.icon} className="text-green-500 dark:text-green-400 text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {subService.title}
                        </h3>
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {subService.description}
                    </p>
                    
                    {subService.benefits && subService.benefits.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Avantages :</h4>
                        <ul className="space-y-1">
                          {subService.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Icon icon="mdi:check-circle" className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-3xl p-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Prêt à transformer votre présence digitale ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Contactez-nous dès aujourd'hui pour discuter de votre projet.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300"
                >
                  Demander une consultation gratuite
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300"
                >
                  Nous appeler
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;