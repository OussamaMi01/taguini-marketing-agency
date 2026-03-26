// src/app/blog/page.tsx
import { Metadata } from "next";
import { Icon } from "@iconify/react";
import UnderConstruction from "@/app/components/Blog/UnderConstruction";

export const metadata: Metadata = {
  title: "Blog | Taguini Marketing - Prochainement",
  description: "Notre blog est en cours de construction. Restez à l'écoute pour découvrir nos prochains articles sur le marketing digital, la création de contenu et les stratégies digitales.",
  keywords: ["blog marketing", "conseils marketing", "stratégies digitales", "Taguini Marketing", "prochainement"],
  robots: {
    index: true,
    follow: true,
  },
};

const Blog = () => {
  return <UnderConstruction />;
};

export default Blog;