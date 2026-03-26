// src/app/sitemap/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getAllPosts } from "@/utils/markdown";

export const metadata: Metadata = {
  title: "Plan du Site | Taguini Marketing",
  description: "Retrouvez toutes les pages, services et articles de Taguini Marketing. Navigation complète et facile pour accéder à tous nos contenus.",
  keywords: ["plan du site", "sitemap", "navigation", "Taguini Marketing", "services marketing"],
  robots: {
    index: true,
    follow: true,
  },
};

// Define services data (should match your API data)
const servicesData = [
  {
    slug: "conception-graphique",
    title: "Conception Graphique",
    icon: "mdi:palette",
    description: "Design visuel professionnel pour votre marque"
  },
  {
    slug: "motion-design",
    title: "Motion Design",
    icon: "mdi:animation",
    description: "Animations créatives et captivantes"
  },
  {
    slug: "videographie",
    title: "Vidéographie",
    icon: "mdi:video",
    description: "Production vidéo professionnelle"
  },
  {
    slug: "creation-de-contenu",
    title: "Création de Contenu",
    icon: "mdi:content-copy",
    description: "Contenu stratégique et engageant"
  },
  {
    slug: "publicite",
    title: "Publicité",
    icon: "mdi:bullhorn",
    description: "Campagnes publicitaires optimisées"
  },
  {
    slug: "gestion-des-medias-sociaux",
    title: "Gestion des Médias Sociaux",
    icon: "mdi:social-media",
    description: "Stratégie complète sur les réseaux sociaux"
  }
];

// Define main navigation pages
const mainPages = [
  { href: "/", label: "Accueil", icon: "mdi:home", description: "Page d'accueil de Taguini Marketing" },
  { href: "/about", label: "À Propos", icon: "mdi:information", description: "Notre histoire et notre équipe" },
  { href: "/services", label: "Services", icon: "mdi:briefcase", description: "Nos services marketing" },
  { href: "/portfolio", label: "Portfolio", icon: "mdi:view-grid", description: "Nos réalisations et projets" },
  { href: "/blog", label: "Blog", icon: "mdi:newspaper", description: "Articles et conseils marketing" },
  { href: "/contact", label: "Contact", icon: "mdi:email", description: "Contactez notre équipe" },
];

// Define legal pages
const legalPages = [
  { href: "/mentions-legales", label: "Mentions Légales", icon: "mdi:file-document" },
  { href: "/politique-de-confidentialite", label: "Politique de Confidentialité", icon: "mdi:shield-account" },
  { href: "/conditions-generales", label: "Conditions Générales", icon: "mdi:file-sign" },
];

export default async function Sitemap() {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-500/30 dark:border-red-400/30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-500/30 dark:border-red-400/30" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
           <div className="pt-16 lg:pt-20" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Plan du Site
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Retrouvez toutes les pages et contenus de Taguini Marketing pour naviguer facilement sur notre site.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Navigation Column */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Icon icon="mdi:compass" className="text-red-500 dark:text-red-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Navigation Rapide
                  </h2>
                </div>
                
                <div className="space-y-3">
                  <Link href="#main-pages" className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                    📄 Pages Principales
                  </Link>
                  <Link href="#services" className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                    🎯 Services
                  </Link>
                  <Link href="#blog" className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                    📝 Derniers Articles
                  </Link>
                  <Link href="#legal" className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                    ⚖️ Pages Légales
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8">
              {/* Main Pages Section */}
              <div id="main-pages" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Icon icon="mdi:pages" className="text-red-500 dark:text-red-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Pages Principales
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {mainPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
                          <Icon icon={page.icon} className="text-red-500 dark:text-red-400 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                            {page.label}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div id="services" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Icon icon="mdi:briefcase" className="text-red-500 dark:text-red-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Nos Services
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
                          <Icon icon={service.icon} className="text-red-500 dark:text-red-400 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              

              {/* Legal Pages Section */}
              <div id="legal" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Icon icon="mdi:gavel" className="text-red-500 dark:text-red-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Informations Légales
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {legalPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
                          <Icon icon={page.icon} className="text-red-500 dark:text-red-400 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                            {page.label}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Site Statistics */}
              <div className="mt-12 p-6 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-500 dark:text-red-400">
                      {mainPages.length + servicesData.length + legalPages.length }
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pages Total</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 dark:text-red-400">
                      {servicesData.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Services</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 dark:text-red-400">
                      {0}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Articles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 dark:text-red-400">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XML Sitemap Notice */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ce plan du site vous aide à naviguer sur notre site. Pour les moteurs de recherche, consultez notre 
            <Link href="/sitemap.xml" className="text-red-500 dark:text-red-400 hover:underline mx-1">
              sitemap XML
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}