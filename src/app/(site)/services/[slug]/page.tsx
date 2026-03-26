// src/app/(site)/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/app/components/Services/ServiceDetail";

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
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

interface PageProps {
  params: { slug: string };
}

// Fetch all services from API with caching
async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/service`, {
      cache: 'force-cache',
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch services: ${res.statusText}`);
    }
    
    const data = await res.json();
    return data.ServicesData || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Fetch specific service by slug
async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find(service => service.slug === slug) || null;
}

// Generate metadata for the page with better SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: "Service non trouvé | Taguini Marketing",
      description: "Le service que vous recherchez n'existe pas ou a été déplacé.",
      robots: {
        index: false,
        follow: false,
      }
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://taguinimarketing.com';
  const title = service.metaTitle || `${service.title} | Taguini Marketing`;
  const description = service.metaDescription || service.description;
  
  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      "marketing digital",
      "agence marketing Tunisie",
      "services marketing",
      "Taguini Marketing",
      ...(service.keywords || [])
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${baseUrl}/services/${service.slug}`,
      siteName: 'Taguini Marketing',
      locale: 'fr_FR',
      ...(service.image && {
        images: [
          {
            url: service.image,
            width: 1200,
            height: 630,
            alt: service.title,
          }
        ]
      })
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(service.image && {
        images: [service.image]
      })
    },
    alternates: {
      canonical: `${baseUrl}/services/${service.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  const services = await getServices();
  
  if (!services.length) {
    return [
      { slug: "conception-graphique" },
      { slug: "motion-design" },
      { slug: "videographie" },
      { slug: "creation-de-contenu" },
      { slug: "publicite" },
      { slug: "gestion-des-medias-sociaux" },
    ];
  }
  
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Page component with proper error handling
export default async function ServicePage({ params }: PageProps) {
  const service = await getServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}