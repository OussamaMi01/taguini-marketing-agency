// menuData.ts - Minimal version
import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { 
    label: "Accueil", 
    href: "/"
  },
  { 
    label: "Services", 
    href: "/services"
  },
  { 
    label: "Portfolio", 
    href: "/portfolio"
  },
  { 
    label: "À propos", 
    href: "/about"
  },
  { 
    label: "Blog", 
    href: "/blogs"
  },
  { 
    label: "Contact", 
    href: "/contact",
    featured: true 
  },
];