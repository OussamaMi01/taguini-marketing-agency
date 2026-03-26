import Achievements from "@/app//components/Home/Achievement";
import { Metadata } from "next";
import PortfolioSectors from "@/app/components/Portfolio/PortfolioSectors";
import PortfolioProjects from "@/app/components/Portfolio/PortfolioProjects";
import ContactCTA from "@/app/components/Home/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio | Taguini Marketing - Nos Réalisations",
  description: "Découvrez notre portfolio de projets en marketing digital, design graphique, vidéographie et stratégie digitale. Voir nos réalisations pour nos clients.",
  keywords: ["portfolio marketing digital", "projets design graphique", "vidéos publicitaires", "logos entreprises", "identité visuelle", "supports publicitaires"],
};

const PortfolioPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Accueil" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  // Portfolio sectors data
  const portfolioSectors = [
    {
      id: 1,
      title: "Logo Design",
      description: "Création de logos uniques et mémorables qui représentent l'essence de votre marque.",
      icon: "mdi:palette",
      color: "from-blue-500 to-blue-600",
      projectsCount: 24,
      featured: true,
    },
    {
      id: 2,
      title: "Identité Visuelle",
      description: "Développement d'identités visuelles complètes incluant charte graphique et guidelines.",
      icon: "mdi:brush",
      color: "from-purple-500 to-purple-600",
      projectsCount: 18,
      featured: true,
    },
    {
      id: 3,
      title: "Supports Publicitaires",
      description: "Conception de supports print et digital pour vos campagnes marketing.",
      icon: "mdi:bullhorn",
      color: "from-green-500 to-green-600",
      projectsCount: 32,
      featured: true,
    },
    {
      id: 4,
      title: "Vidéos Publicitaires",
      description: "Production de vidéos publicitaires créatives qui captivent votre audience.",
      icon: "mdi:video",
      color: "from-red-500 to-red-600",
      projectsCount: 15,
      featured: true,
    },
    {
      id: 5,
      title: "Stratégie Social Media",
      description: "Campagnes sociales qui boostent l'engagement et la conversion.",
      icon: "mdi:instagram",
      color: "from-pink-500 to-pink-600",
      projectsCount: 28,
      featured: false,
    },
    {
      id: 6,
      title: "Sites Web & E-commerce",
      description: "Développement de sites vitrines et boutiques en ligne optimisés.",
      icon: "mdi:web",
      color: "from-orange-500 to-orange-600",
      projectsCount: 22,
      featured: false,
    },
  ];

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Rebranding - Maison Élégante Paris",
      description: "Refonte complète de l'identité visuelle pour une marque de luxe française.",
      sector: "Identité Visuelle",
      client: "Maison Élégante Paris",
      year: "2023",
      image: "/images/portfolio/projet4.jpg",
      tags: ["Logo", "Charte Graphique", "Branding"],
      featured: true,
    },
    {
      id: 2,
      title: "Campagne Vidéo - EcoLife Stores",
      description: "Série de vidéos publicitaires pour promouvoir une chaîne de magasins écologiques.",
      sector: "Vidéos Publicitaires",
      client: "EcoLife Stores",
      year: "2023",
      videoUrl: "/images/portfolio",
      urlVideo: "https://youtu.be/BA4ecAbX1ps?si=LVQedRXY_HY3k3yS",
      tags: ["Production Vidéo", "Storytelling", "Publicité"],
      featured: true,
    },
    {
      id: 3,
      title: "Supports Print - TechVision Solutions",
      description: "Création de brochures, flyers et affiches pour une startup tech.",
      sector: "Supports Publicitaires",
      client: "TechVision Solutions",
      year: "2024",
      image: "/images/portfolio/projet9.jpg",
      tags: ["Print", "Design", "Marketing"],
      featured: true,
    },
    {
      id: 4,
      title: "Logo Corporate - GlobalTech Corp",
      description: "Design d'un logo moderne pour une entreprise internationale de technologie.",
      sector: "Logo Design",
      client: "GlobalTech Corp",
      year: "2024",
      image: "/images/portfolio/projet1.jpg",
      tags: ["Logo Design", "Corporate", "Minimaliste"],
      featured: true,
    },
    {
      id: 5,
      title: "Campagne Social Media - Myriam FS",
      description: "Gestion complète des réseaux sociaux avec création de contenu quotidien.",
      sector: "Affiches Publicitaires",
      client: "Myriam FS",
      year: "2023",
      image: "/images/portfolio/projet6.jpg",
      tags: ["Social Media", "Content", "Community"],
      featured: true,
    },
    {
      id: 6,
      title: "Site E-commerce - Artisanat du Monde",
      description: "Développement d'une boutique en ligne pour produits artisanaux.",
      sector: "Sites Web & E-commerce",
      client: "Artisanat du Monde",
      year: "2024",
      image: "/images/portfolio/artisanat-ecommerce.jpg",
      tags: ["E-commerce", "UI/UX", "Développement"],
      featured: false,
    },
    {
      id: 7,
      title: "Logo Corporate - GlobalTech Corp",
      description: "Design d'un logo moderne pour une entreprise internationale de technologie.",
      sector: "Logo Design",
      client: "GlobalTech Corp",
      year: "2024",
      image: "/images/portfolio/projet2.jpg",
      tags: ["Logo Design", "Corporate", "Minimaliste"],
      featured: true,
    }, {
      id: 8,
      title: "Logo Corporate - GlobalTech Corp",
      description: "Design d'un logo moderne pour une entreprise internationale de technologie.",
      sector: "Logo Design",
      client: "GlobalTech Corp",
      year: "2024",
      image: "/images/portfolio/projet3.jpg",
      tags: ["Logo Design", "Corporate", "Minimaliste"],
      featured: true,
    },

    {
      id: 9,
      title: "Rebranding - Maison Élégante Paris",
      description: "Refonte complète de l'identité visuelle pour une marque de luxe française.",
      sector: "Identité Visuelle",
      client: "Maison Élégante Paris",
      year: "2023",
      image: "/images/portfolio/projet5.jpg",
      tags: ["Logo", "Charte Graphique", "Branding"],
      featured: true,
    },
    {
      id: 10,
      title: "Campagne Social Media - Myriam FS",
      description: "Gestion complète des réseaux sociaux avec création de contenu quotidien.",
      sector: "Affiches Publicitaires",
      client: "Myriam FS",
      year: "2023",
      image: "/images/portfolio/projet7.jpg",
      tags: ["Social Media", "Content", "Community"],
      featured: true,
    }, {
      id: 11,
      title: "Campagne Social Media - Myriam FS",
      description: "Gestion complète des réseaux sociaux avec création de contenu quotidien.",
      sector: "Affiches Publicitaires",
      client: "Myriam FS",
      year: "2023",
      image: "/images/portfolio/projet8.jpg",
      tags: ["Social Media", "Content", "Community"],
      featured: true,
    },
  ];

  return (
    <>

      <div className="pt-16 lg:pt-20" />


      {/* Featured Projects Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Projets <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">Phares</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une sélection de nos projets les plus marquants à travers différents secteurs
            </p>
          </div>

          <PortfolioProjects projects={featuredProjects} />
        </div>
      </section>



      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Notre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                {" "}Processus
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              De la conception à la livraison, nous suivons une méthodologie rigoureuse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analyse & Brief", description: "Compréhension approfondie de vos besoins" },
              { step: "02", title: "Conception", description: "Création de concepts et maquettes" },
              { step: "03", title: "Développement", description: "Production et exécution du projet" },
              { step: "04", title: "Livraison & Suivi", description: "Livraison et optimisation continue" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA />
    </>
  );
};

export default PortfolioPage;