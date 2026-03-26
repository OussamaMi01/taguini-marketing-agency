"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import SingleService from "./SingleService";
export const heroServices = [
  { icon: "mdi:palette", label: "Conception graphique", slug: "conception-graphique" },
  { icon: "mdi:animation", label: "Motion design", slug: "motion-design" },
  { icon: "mdi:video", label: "Vidégraphie", slug: "videographie" },
  { icon: "mdi:content-copy", label: "Création de contenu", slug: "creation-de-contenu" },
  { icon: "mdi:bullhorn", label: "Publicité", slug: "publicite" },
  { icon: "mdi:social-media", label: "Gestion des médias sociaux", slug: "gestion-des-medias-sociaux" },
];

const Services = () => {
  const [services, setServices] = useState<any[]>([])
  // Add this to your Hero component file

  // Your services data with proper structure
  const customServices = [
    {
      id: "social-media-management",
      icon: "/images/services/social-media-management.png",
      title: "Gestion des Médias Sociaux",
      slug: "social-media-management",
      description: "Stratégie complète de marketing sur les réseaux sociaux avec calendrier éditorial et rapports détaillés.",
      features: [
        "Stratégie de marketing",
        "Calendrier éditorial",
        "Rapport mensuel d'analyse",
        "Statistiques détaillées"
      ],
      cta: "Commencez"
    },
    {
      id: "content-creation",
      icon: "/images/services/content-creation.png",
      title: "Création de Contenu",
      slug: "content-creation",
      description: "Production de contenu créatif et stratégique pour renforcer votre présence digitale.",
      features: [
        "Idées créatives",
        "Scripts & scénarios",
        "Publications réseaux sociaux",
        "Voix off & chansons",
        "Recherche de noms"
      ],
      cta: "Commencez"
    },
    {
      id: "visual-creation",
      icon: "/images/services/visual-design.png",
      title: "Création Visuelle",
      slug: "visual-creation",
      description: "Design graphique professionnel et production audiovisuelle de haute qualité.",
      features: [
        "Conception de logos",
        "Cartes de visite / flyers / affiches",
        "Montage vidéo",
        "Design graphique",
        "Tournage professionnel",
        "Animation graphique"
      ],
      cta: "Commencez"
    },
    {
      id: "sponsoring-ads",
      icon: "/images/services/advertising.png",
      title: "Sponsoring & Publicité",
      slug: "sponsoring-ads",
      description: "Campagnes publicitaires optimisées pour maximiser votre ROI sur toutes les plateformes.",
      features: [
        "Facebook ADS Manager",
        "Google ADS",
        "Afficher plus",
        "Campagnes ciblées"
      ],
      cta: "Commencez"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/service')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        const servicesData = data.ServicesData || []
        
        // Transform API data to ensure proper structure
        const transformedServices = servicesData.map((service: any, index: number) => {
          // Extract string values from nested objects
          const getStringValue = (value: any): string => {
            if (typeof value === 'string') return value;
            if (typeof value === 'object' && value !== null) {
              return value.text || value.title || value.name || value.description || '';
            }
            return String(value || '');
          };

          // Handle features - could be array of strings or objects
          let features: string[] = [];
          if (Array.isArray(service.features)) {
            features = service.features.map((f: any) => getStringValue(f.title || f));
          }

          // Map old icon names to PNG paths
          const iconMap: Record<string, string> = {
            'solar:notebook-bookmark-linear': '/images/services/social-media-management.png',
            'solar:cart-3-linear': '/images/services/content-creation.png',
            'solar:video-frame-replace-linear': '/images/services/visual-design.png',
            'solar:stethoscope-linear': '/images/services/advertising.png',
            'solar:chart-square-linear': '/images/services/social-media-management.png',
            'solar:hand-money-linear': '/images/services/content-creation.png',
            'mdi:social-media': '/images/services/social-media-management.png',
            'mdi:content-copy': '/images/services/content-creation.png',
            'mdi:palette': '/images/services/visual-design.png',
            'mdi:bullhorn': '/images/services/advertising.png',
          };

          const icon = iconMap[service.icon] || service.icon || customServices[index % customServices.length]?.icon;

          return {
            id: service.id || service.slug || `service-${index}`,
            icon: icon,
            title: getStringValue(service.title),
            slug: service.slug || service.id || `service-${index}`,
            description: getStringValue(service.description),
            features: features.length > 0 ? features : customServices[index % customServices.length]?.features || [],
            cta: service.cta || "Commencez"
          };
        });

        // Use transformed services or custom services
        const finalServices = transformedServices.length > 0 ? transformedServices : customServices;
        setServices(finalServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Use custom services as fallback
        setServices(customServices);
      }
    }

    fetchData();
  }, [])

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Filter out any services with empty or invalid data
  const validServices = services.filter(service => 
    service && 
    service.title && 
    typeof service.title === 'string' && 
    service.title.trim() !== ''
  );

  // Use valid services or custom services as fallback
  const servicesToDisplay = validServices.length > 0 ? validServices : customServices;

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
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700">
              <Icon icon="mdi:star" className="text-red-500 dark:text-red-400" />
              <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                Solutions Premium
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white block">
              Taguini Marketing vous offre
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              l'excellence avec les meilleures solutions
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Des services complets de marketing digital conçus pour propulser votre 
            entreprise vers de nouveaux sommets de réussite et de visibilité.
          </motion.p>
        </motion.div>

        {/* Services Grid - Use SingleService component */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {servicesToDisplay.map((service, index) => (
            <SingleService 
              key={service.id} 
              service={service} 
            />
          ))}
        </motion.div>

        {/* All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 lg:mt-20"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-red-500 text-red-500 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
          >
            <span>Voir tous nos services</span>
            <Icon 
              icon="mdi:arrow-right" 
              className="group-hover:translate-x-1 transition-transform text-xl" 
            />
          </Link>
        </motion.div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/20 dark:border-red-400/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/20 dark:border-red-400/20" />
    </section>
  );
};

export default Services;