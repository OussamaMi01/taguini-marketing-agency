import React from "react";
import { Metadata } from "next";
import Hero from "@/app/components/Home/Hero";
import Services from "@/app/components/Home/Services";
import Features from "@/app/components/Home/Features";
import Team from "@/app/components/Home/Team";
import Plan from "@/app/components/Home/Plans";
import Achievements from "@/app/components/Home/Achievement";
import Testimonials from "@/app/components/Home/Info";
import Partners from "@/app/components/Home/Partner";
import ContactCTA from "@/app/components/Home/ContactCTA";

export const metadata: Metadata = {
  title: "Taguini Marketing - Agence de Marketing Digital | Sfax, Tunisie",
  description: "Agence de marketing digital spécialisée en création de contenu, stratégie digitale, gestion des médias sociaux et publicité en ligne à Sfax, Tunisie.",
  keywords: ["agence marketing Sfax", "marketing digital Tunisie", "création contenu", "social media", "publicité en ligne", "SEO"],
};

export default function Home() {
  return (
    <main>
      {/* Hero Section - Main banner with CTAs */}
      <Hero />
      
      {/* Services Section - What we offer */}
      <Services />
      
      {/* Features Section - Why choose us */}
      <Features />
      
      {/* Team Section - Meet our experts */}
      <Team />
      
      {/* Achievements Section - Our portfolio/projects */}
      <Achievements />
      
      {/* Testimonials Section - Client reviews */}
      <Testimonials />
      
      {/* Partners Section - Brands we work with */}
      <Partners />
      
      {/* Contact CTA Section - Final call to action */}
      <ContactCTA />
    </main>
  );
}