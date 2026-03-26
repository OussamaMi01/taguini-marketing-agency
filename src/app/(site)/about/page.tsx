// src/app/about/page.tsx (or wherever this lives)
import { Metadata } from "next";
import MissionVision from "@/app/components/About/MissionVision";
import StatsSection from "@/app/components/About/StatsSection";
import WhyChooseUs from "@/app/components/About/WhyChooseUs";
import OurValues from "@/app/components/About/OurValues";
import OurProcess from "@/app/components/About/OurProcess";
import TeamSection from "@/app/components/Home/Team";
import ContentSection from "@/app/components/About/ContentSection";

export const metadata: Metadata = {
  title: "À propos | Taguini Marketing - Agence de Marketing Digital à Sfax",
  description:
    "Découvrez Taguini Marketing, agence de marketing digital à Sfax. Notre mission, vision, valeurs et expertise pour votre succès digital.",
  keywords: [
    "agence marketing Sfax",
    "à propos Taguini",
    "équipe marketing digital",
    "mission vision",
    "valeurs entreprise",
  ],
};

const AboutPage = () => {
  return (
    <>
      {/* Spacer to push content below the fixed header */}
      <div className="pt-16 lg:pt-20" />

      <MissionVision />
      <ContentSection />
      <StatsSection />
      <WhyChooseUs />
      <OurValues />
      <TeamSection />
      <OurProcess />
    </>
  );
};

export default AboutPage;