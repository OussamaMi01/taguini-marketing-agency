import { NextResponse } from 'next/server'

const Technologies = [
    {
        base: "devicon:angular",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:html5",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:react",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:html5",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:react",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:react",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:angular",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:angular",
        styling: "devicon:bootstrap",
    },
];

const DocText = [
    {
        icon: "tabler:brand-github",
        title: "Github Sync",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        icon: "tabler:crown",
        title: "Branding",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        icon: "tabler:message-circle",
        title: "Comments",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
];

const Portfolio = [
    {
        image: "/images/productdoc/Portfolio-1.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-2.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-3.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-4.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-5.jpg",
    },
];

// If using API, update your /api/data route:
const MonthlyPlans = [
  {
    id: "bronze",
    type: "Pack Bronze",
    price: "À partir de 299",
    period: "Mensuel",
    color: "bronze",
    text: "8 Publications par mois",
    benefits: [
      "2 Vidéos professionnelles",
      "6 publications créatives",
      "6 publications affiche (chaque publication de 1 à 3 affiches)",
      "Texte publicitaire optimisé",
      "Rapport Mensuel détaillé",
      "Gestion de 1 plateforme sociale",
      "Réponse aux commentaires",
      "Stratégie de contenu de base"
    ],
    features: [
      "2 Vidéos",
      "6 Publications",
      "Rapport Mensuel",
      "1 Plateforme"
    ]
  },
  {
    id: "silver",
    type: "Pack Silver",
    price: "À partir de 499",
    period: "Mensuel",
    color: "silver",
    text: "12 Publications par mois",
    benefits: [
      "4 Vidéos professionnelles",
      "8 publications créatives",
      "8 publications affiche (chaque publication de 1 à 3 affiches)",
      "Texte publicitaire optimisé",
      "Rapport Mensuel détaillé",
      "Gestion de 2 plateformes sociales",
      "Réponse aux commentaires",
      "Stratégie de contenu avancée",
      "Analyse de la concurrence",
      "Suggestions d'amélioration"
    ],
    features: [
      "4 Vidéos",
      "8 Publications",
      "Rapport Mensuel",
      "2 Plateformes",
      "Analyse Concurrence"
    ]
  },
  {
    id: "gold",
    type: "Pack Gold",
    price: "À partir de 799",
    period: "Mensuel",
    color: "gold",
    text: "16 Publications par mois",
    benefits: [
      "6 Vidéos professionnelles",
      "10 publications créatives",
      "10 publications affiche (chaque publication de 1 à 5 affiches)",
      "Texte publicitaire optimisé",
      "Rapport Mensuel détaillé",
      "Gestion de 3 plateformes sociales",
      "Réponse aux commentaires",
      "Stratégie de contenu premium",
      "Analyse de la concurrence approfondie",
      "Suggestions d'amélioration hebdomadaires",
      "Community Management actif",
      "Campagnes publicitaires basiques incluses"
    ],
    features: [
      "6 Vidéos",
      "10 Publications",
      "Rapport Mensuel",
      "3 Plateformes",
      "Analyse Concurrence",
      "Community Management",
      "Campagnes Pub"
    ]
  }
];

const yearlyPlans = MonthlyPlans.map(plan => ({
  ...plan,
  price: `À partir de ${Math.round(parseInt(plan.price.match(/\d+/)?.[0] || '0') * 10 * 0.8)}`,
  period: "Annuel",
  text: plan.text.replace("Mensuel", "Annuel"),
  benefits: [...plan.benefits, "Économisez 20% avec l'abonnement annuel"]
}));

const Questions = [
    {
        question: "Letraset sheets containing sum passages ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "There are many variations ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Lorem Ipsum generators on the Internet tend ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Various versions have evolved over the ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Finibus bonorum et malorum ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Many desktop publishing packages ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
];

const Testimonial = [
    {
        review:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        name: "Merky Lester",
        post: "Manager",
        Image: "/images/profile.png",
    },
    {
        review:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        name: "Merky Lester",
        post: "Manager",
        Image: "/images/profile.png",
    },
    {
        review:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        name: "Merky Lester",
        post: "Manager",
        Image: "/images/profile.png",
    },
];

const partners = [
  
    {
        image: "/images/partners/client1-logo.png",
    },
    {
        image: "/images/partners/client2-logo.png",
    },
    {
        image: "/images/partners/client3-logo.png",
    },
    {
        image: "/images/partners/client4-logo.png",
    },
    {
        image: "/images/partners/client5-logo.png",
    },
    {
        image: "/images/partners/client6-logo.png",
    },
    {
        image: "/images/partners/client7-logo.png",
    },
    {
        image: "/images/partners/client8-logo.png",
    },
    {
        image: "/images/partners/client9-logo.png",
    },
    {
        image: "/images/partners/client10-logo.png",
    },
    {
        image: "/images/partners/client11-logo.png",
    },
    {
        image: "/images/partners/client12-logo.png",
    },
    {
        image: "/images/partners/client13-logo.png",
    },
    {
        image: "/images/partners/client14-logo.png",
    },
    {
        image: "/images/partners/client15-logo.png",
    },
    {
        image: "/images/partners/client16-logo.png",
    },
    {
        image: "/images/partners/client17-logo.png",
    },
    {
        image: "/images/partners/client18-logo.png",
    },
    {
        image: "/images/partners/client19-logo.png",
    },
    {
        image: "/images/partners/client20-logo.jpg",
    },
  


];

export const GET = () => {
    return NextResponse.json({
        Technologies,
        DocText,
        Portfolio,
        MonthlyPlans,
        yearlyPlans,
        Questions,
        Testimonial,
        partners,
    })
}

export interface AchievementType {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  tags: string[];
  results: Array<{
    value: string;
    label: string;
  }>;
}
const defaultAchievements = [
    {
      id: 1,
      title: "Stratégie Social Media Luxe",
      client: "Maison Élégante Paris",
      image: "/images/achievements/achievement1.jpg",
      category: "Social Media",
    },
    {
      id: 2,
      title: "Refonte Identité Visuelle",
      client: "TechVision Solutions",
      image: "/images/achievements/achievement2.jpg",
      category: "Branding",
    },
    {
      id: 3,
      title: "Campagne Performance",
      client: "EcoLife Stores",
      image: "/images/achievements/achievement3.jpg",
      category: "Publicité",
    },
    {
      id: 4,
      title: "Série Vidéo Émotionnelle",
      client: "HumanCare Foundation",
      image: "/images/achievements/achievement4.jpg",
      category: "Vidéographie",
    },
    {
      id: 5,
      title: "Plateforme E-commerce",
      client: "Artisanat du Monde",
      image: "/images/achievements/achievement5.jpg",
      category: "Web Design",
    },
    {
      id: 6,
      title: "Application Mobile",
      client: "WellnessPro",
      image: "/images/achievements/achievement1.jpg",
      category: "App Design",
    },
  ];