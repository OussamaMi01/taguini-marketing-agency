"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface SectorType {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  projectsCount: number;
  featured: boolean;
}

interface PortfolioSectorsProps {
  sectors: SectorType[];
}

const PortfolioSectors: React.FC<PortfolioSectorsProps> = ({ sectors }) => {
  const featuredSectors = sectors.filter(sector => sector.featured);
  const otherSectors = sectors.filter(sector => !sector.featured);

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Nos Secteurs
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              d&apos;Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez nos domaines de spécialisation où nous excellons pour nos clients
          </p>
        </div>

        {/* Featured Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredSectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 h-full hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-6`}>
                  <Icon icon={sector.icon} className="text-white text-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {sector.description}
                </p>

                {/* Projects Count */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {sector.projectsCount} projets
                  </span>
                  <Link
                    href={`/portfolio/${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    Voir projets
                    <Icon icon="mdi:arrow-right" className="text-base group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherSectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link
                href={`/portfolio/${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${sector.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon icon={sector.icon} className="text-white text-lg" />
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {sector.title}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {sector.projectsCount} projets
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300"
          >
            Discuter de votre projet
            <Icon icon="mdi:arrow-right" className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectors;