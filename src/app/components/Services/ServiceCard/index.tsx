"use client";
import { useState, useEffect } from "react";
import SingleService from "../../Home/Services/SingleService";
import SkeletonCard from "../../Skeleton/ServiceCard/page";

const ServicesCard = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/service");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        console.log("API Response:", data); // Debug log
        
        // Transform the API data to match the expected structure
        const transformServiceData = (apiData: any) => {
          if (!apiData || !Array.isArray(apiData)) return [];
          
          return apiData.map((item: any, index: number) => {
            // Extract string values from nested objects
            const getStringValue = (value: any): string => {
              if (typeof value === 'string') return value;
              if (typeof value === 'object' && value !== null) {
                return value.text || value.title || value.name || value.description || '';
              }
              return String(value || '');
            };

            // Map icon names to PNG paths
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

            // Create a clean service object
            const service = {
              id: item.id || item.slug || `service-${index}`,
              icon: iconMap[item.icon] || item.icon || '/images/services/default-service.png',
              title: getStringValue(item.title),
              slug: item.slug || item.id || `service-${index}`,
              description: getStringValue(item.description),
              features: Array.isArray(item.features) 
                ? item.features.map((f: any) => getStringValue(f.title || f))
                : [],
              cta: item.cta || "Commencez"
            };

            // Log transformed service for debugging
            console.log(`Transformed service ${index}:`, service);
            return service;
          });
        };

        const transformedServices = transformServiceData(data.ServicesData || data);
        console.log("Transformed Services:", transformedServices);
        
        // Use fallback data if no valid services
        const fallbackServices = [
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

        const finalServices = transformedServices.length > 0 ? transformedServices : fallbackServices;
        setServices(finalServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        // Use fallback services
        const fallbackServices = [
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
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter out any invalid services (empty or missing title)
  const validServices = services.filter(service => 
    service && 
    service.title && 
    typeof service.title === 'string' && 
    service.title.trim() !== '' &&
    service.description &&
    typeof service.description === 'string'
  );

  return (
    <section className="dark:bg-darkmode bg-[url('/images/plan/price-plan-background-icons.svg')] bg-auto bg-center bg-no-repeat py-20 lg:py-28">
      <div className="container mx-auto lg:max-w-7xl px-4">
        <div className="mb-17 text-center">
          <h1 className="font-semibold lg:text-6xl sm:text-5xl text-3xl text-black dark:text-white">
            Solutions de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">Marketing Digital</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Des services complets pour propulser votre présence en ligne
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            : validServices.map((item, index) => (
                <div key={item.id || index} className="col-span-1">
                  <SingleService service={item} />
                </div>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;