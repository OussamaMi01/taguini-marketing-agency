"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  // Services data
  const services = [
    { icon: "mdi:palette", label: "Conception graphique" },
    { icon: "mdi:animation", label: "Motion design" },
    { icon: "mdi:video", label: "Vidégraphie" },
    { icon: "mdi:content-copy", label: "Création de contenu" },
    { icon: "mdi:bullhorn", label: "Publicité" },
    { icon: "mdi:social-media", label: "Gestion des médias sociaux" },
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <section
      ref={ref}
      className="relative min-h-screen lg:min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating shapes */}
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

        {/* Grid pattern - using inline SVG */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center',
          }}
        />
      </div>


      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-500/30 dark:border-red-400/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-500/30 dark:border-red-400/30" />

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700">
                <Icon icon="mdi:sparkles" className="text-red-500 dark:text-red-400" />
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                  Agence certifiée
                </span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-gray-900 dark:text-white block">
                L&apos;Agence de marketing
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                Digitale qui fait la différence !
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
            >
              Créativité numérique,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-500 dark:text-red-400">
                  performance assurée
                </span>
                <motion.span
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-1 left-0 h-2 bg-red-500/20 dark:bg-red-400/20 z-0"
                />
              </span>
            </motion.p>

            {/* Services Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 py-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all cursor-default"
                >
                  <Icon
                    icon={service.icon}
                    className={`text-lg ${activeService === index ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`}
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed"
            >
              Conception graphique, motion design, vidéographie, création de contenu, publicité.
              Nos services englobent aussi la gestion des médias sociaux et bien plus encore.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Link
                href="/contact"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white font-semibold rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-500/25 dark:hover:shadow-red-600/25 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon icon="mdi:chat-processing-outline" className="text-xl" />
                  Obtenir un devis gratuit
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isHoveringCTA && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                )}
              </Link>

              <button
                onClick={openModal}
                className="group px-8 py-4 border-2 border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 flex items-center gap-2"
              >
                <Icon icon="mdi:play-circle" className="text-xl" />
                Voir notre démo
              </button>

              <Link
                href="/services"
                className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-2 group"
              >
                Explorer nos services
                <Icon
                  icon="mdi:arrow-right"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Icon icon="mdi:check-circle" className="text-green-500 dark:text-green-400" />
                <span>+150 projets réalisés</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:star" className="text-yellow-500 dark:text-yellow-400" />
                <span>4.9/5 satisfaction client</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-fast" className="text-blue-500 dark:text-blue-400" />
                <span>Livraison rapide</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.5
              }
            }}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
            className="relative"
          >
            {/* Main image with floating effect */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 dark:shadow-red-600/10 border-2 border-white/20 dark:border-gray-700/30 backdrop-blur-sm">
                {/* Replace with your actual banner.webp image */}
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero/banner.jpg"
                    alt="Équipe marketing Taguini - Experts en stratégie digitale et création de contenu"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    quality={90}
                  />

                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                </div>
              </div>

              {/* Floating elements around main image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <Icon icon="mdi:trending-up" className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">+87%</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Engagement</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon icon="mdi:rocket" className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">×2.4</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Conversion</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Animated background pattern behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
              <div className="absolute inset-0 border-2 border-red-500/20 dark:border-red-400/20 rounded-3xl" />
              <div className="absolute inset-8 border-2 border-gray-400/20 dark:border-gray-500/20 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Découvrir plus</span>
            <Icon icon="mdi:chevron-double-down" className="text-2xl text-gray-400 dark:text-gray-500" />
          </div>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Démo de notre travail
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <Icon icon="mdi:close" className="text-2xl" />
                </button>
              </div>
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10" />
                <button className="relative z-10 group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon="mdi:play" className="text-white text-3xl ml-1" />
                  </div>
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Découvrez comment nous transformons les idées en résultats concrets pour nos clients.
                Notre approche unique combine créativité et analyse de données pour maximiser votre ROI.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex-1"
                >
                  Fermer
                </button>
                <Link
                  href="/portfolio"
                  onClick={closeModal}
                  className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors flex-1 text-center"
                >
                  Voir tous nos projets
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;