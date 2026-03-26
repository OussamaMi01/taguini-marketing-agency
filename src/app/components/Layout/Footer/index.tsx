"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Footer: FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Your marketing agency services
  const marketingServices = [
    { id: 1, title: "Gestion des médias sociaux", slug: "social-media-management" },
    { id: 2, title: "Création de contenu", slug: "content-creation" },
    { id: 3, title: "Design Graphique", slug: "graphic-design" },
    { id: 4, title: "Vidéographie", slug: "videography" },
    { id: 5, title: "Sponsoring", slug: "sponsoring-ads" }
    
  ];

  useEffect(() => {
    // Use marketing services directly instead of API
    setServices(marketingServices);

    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Google Maps coordinates for Taguini Marketing (Sfax, Tunisia)
  const googleMapsLink = "https://www.google.com/maps?ll=34.742693,10.75408&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=17729041465636666432";
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13114.282378025885!2d10.751882!3d34.742693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d1b2be4d468b%3A0xc077e1a6e9981d2e!2sTaguini%20Marketing!5e0!3m2!1sen!2stn!4v${Date.now()}!5m2!1sen!2stn`;

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-black pt-20 lg:pt-24 pb-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-red-500/5 to-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Content with Google Maps - Adjusted layout for larger map */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={footerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 pb-16 lg:pb-20 border-b border-gray-700 dark:border-gray-800"
        >
          {/* Left Column - Contact Info & Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Contact Info Column */}
            <div className="space-y-8">
              {/* Logo & Description */}
              <div>
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/images/logo/logo-white.png"
                    alt="Taguini Marketing Logo"
                    width={180}
                    height={48}
                    className="h-12 w-auto brightness-0 invert"
                  />
                </Link>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  Agence de marketing digital qui transforme vos idées en résultats concrets avec créativité et performance.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">Contactez-nous</h4>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:map-marker" className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Adresse</div>
                    <p className="text-white font-medium">
                      Sfax, Tunisie
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Imm Lafran centre, Mezanine Bureau N°3,
                      Route de Lafran Km 0.5 Sfax
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:phone" className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Téléphone</div>
                    <Link
                      href="tel:+21654650272"
                      className="text-white font-medium hover:text-red-400 transition-colors"
                    >
                      +216 54 650 272
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:email" className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <Link
                      href="mailto:contact@taguini.com"
                      className="text-white font-medium hover:text-red-400 transition-colors"
                    >
                      contact@taguini.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="text-white font-medium mb-4">Suivez-nous</h5>
                <div className="flex gap-3">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Icon
                      icon="mdi:facebook"
                      width="24"
                      height="24"
                      className="text-gray-300 group-hover:text-white"
                    />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-pink-600 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Icon
                      icon="mdi:instagram"
                      width="24"
                      height="24"
                      className="text-gray-300 group-hover:text-white"
                    />
                  </Link>
                  <Link
                    href="https://wa.me/21654650272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <Icon
                      icon="mdi:whatsapp"
                      width="24"
                      height="24"
                      className="text-gray-300 group-hover:text-white"
                    />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      width="24"
                      height="24"
                      className="text-gray-300 group-hover:text-white"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Services & Links Column */}
            <div className="space-y-10">
              {/* Services */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700 dark:border-gray-800 inline-block">
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group"
                      >
                        <Icon
                          icon="mdi:chevron-right"
                          className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700 dark:border-gray-800 inline-block">
                  Liens Rapides
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        Accueil
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        À propos
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        Portfolio
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        Blog
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

             
            </div>
          </motion.div>

          {/* Right Column - Larger Google Maps */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700 dark:border-gray-800 inline-block">
              Notre Localisation
            </h4>

            {/* Larger Map Container */}
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="rounded-2xl overflow-hidden border border-gray-700 dark:border-gray-800 shadow-2xl h-full">
                <div className="relative h-80 lg:h-[400px] bg-gray-900">
                  {isMapLoaded ? (
                    <iframe
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Taguini Marketing Location - Sfax, Tunisia"
                      className="absolute inset-0"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-700 border-t-red-500 animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-300">Chargement de la carte...</p>
                      </div>
                    </div>
                  )}

                  {/* Map Overlay Controls */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => window.open(googleMapsLink, '_blank')}
                      className="px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 text-sm font-medium hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-lg"
                      aria-label="Ouvrir dans Google Maps"
                    >
                      <Icon icon="mdi:open-in-new" className="text-base" />
                      <span className="hidden sm:inline">Google Maps</span>
                    </button>
                  </div>
                </div>

                {/* Map Footer */}
                <div className="bg-gray-900 p-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                        <Icon icon="mdi:map-marker" className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Sfax, Tunisie</p>
                        <p className="text-gray-400 text-xs">Centre Ville</p>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent('Taguini Marketing, Sfax, Tunisia')}`, '_blank')}
                      className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      aria-label="Obtenir l'itinéraire"
                    >
                      Itinéraire
                      <Icon icon="mdi:arrow-right" className="text-base" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} Taguini Marketing | Tous droits réservés
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Conçu avec passion pour propulser votre entreprise vers le succès digital
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-red-400 transition-colors text-sm"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-red-400 transition-colors text-sm"
            >
              Conditions d'Utilisation
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-red-400 transition-colors text-sm"
            >
              Plan du Site
            </Link>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 z-40"
          aria-label="Retour en haut"
        >
          <Icon icon="mdi:chevron-up" className="text-xl" />
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/20 opacity-50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/20 opacity-50" />
    </footer>
  );
};

export default Footer;