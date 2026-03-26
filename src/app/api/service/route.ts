// app/api/service/route.ts
import { NextResponse } from 'next/server'

const ServicesData = [
    {
        id: "social-media-management",
        icon: "/images/services/social-media-management.png",
        title: "Gestion des Médias Sociaux",
        slug: "social-media-management",
        image: "/images/services/social-media-management-hero.png",
        description: "Stratégie complète de marketing sur les réseaux sociaux avec calendrier éditorial et rapports détaillés.",
        detail: "Nous gérons votre présence sur les réseaux sociaux de A à Z. De la stratégie à l'exécution, en passant par la création de contenu et l'analyse des performances, nous optimisons votre visibilité et engagement. Notre équipe crée un calendrier éditorial personnalisé, publie du contenu de qualité, interagit avec votre audience et fournit des rapports mensuels détaillés pour mesurer le ROI.",
        features: [
            {
                title: "Stratégie de Marketing Personnalisée",
                description: "Développement d'une stratégie adaptée à vos objectifs et à votre public cible."
            },
            {
                title: "Calendrier Éditorial",
                description: "Planification et programmation du contenu pour une présence constante et cohérente."
            },
            {
                title: "Rapport Mensuel d'Analyse",
                description: "Suivi détaillé des performances avec indicateurs clés et recommandations."
            },
            {
                title: "Gestion de la Communauté",
                description: "Interaction quotidienne avec votre audience pour renforcer l'engagement."
            },
            {
                title: "Campagnes Publicitaires",
                description: "Création et optimisation de campagnes publicitaires sur les réseaux sociaux."
            }
        ],
        cta: "Commencez"
    },
    {
        id: "content-creation",
        icon: "/images/services/content-creation.png",
        title: "Création de Contenu",
        slug: "content-creation",
        image: "/images/services/content-creation-hero.png",
        description: "Communiquez votre message aux bonnes personnes. Lancez-vous avec notre expertise en création de contenu digital en Tunisie.",
        detail: "La création de contenu n'est pas seulement une tâche, c'est une passion. Nous sommes des maîtres de l'art de la création de contenu qui sort de l'ordinaire. Notre service de création de contenu est conçu pour éveiller l'imagination, captiver votre public et faire briller votre marque d'une manière inoubliable. De la conception à l'exécution, chaque élément est minutieusement élaboré pour raconter votre histoire.\n\nNotre équipe de créateurs de contenu talentueux est composée d'écrivains passionnés, de visionnaires créatifs et de professionnels Voice actors. Nous puisons dans les recoins les plus profonds de votre marque pour créer des histoires qui transcendent les conventions et qui s'inscrivent dans l'esprit de votre public.",
        problems: [
            {
                title: "Mettez Fin aux Messages Ambigus",
                description: "Les messages ambigus peuvent semer la confusion et diminuer l'impact de votre communication. Si votre public ne comprend pas clairement ce que vous essayez de dire, vous risquez de perdre des opportunités précieuses. C'est là que nous intervenons avec une solution sur mesure. Nous sommes des experts dans la transformation des idées complexes en messages simples qui sont plus susceptibles d'engager votre audience, conduisant à une interaction plus significative."
            },
            {
                title: "Éliminez le Manque à Gagner",
                description: "La perte d'argent peut découler de diverses sources, allant de l'inefficacité opérationnelle à des stratégies publicitaires mal ciblées. Ces pertes peuvent avoir un impact négatif sur vos résultats financiers et entraver votre croissance. Que ce soit dans le marketing, la publicité ou d'autres domaines, nous veillons à ce que chaque dinar investi génère des résultats tangibles, nous sommes là pour inverser cette tendance."
            },
            {
                title: "Compensez le Manque de Ressources",
                description: "Le manque de personnel, de temps ou de compétences peut entraver la mise en œuvre de projets et la réalisation d'objectifs. Cela peut ralentir votre progression et vous empêcher de saisir des opportunités précieuses. Nous sommes là pour transformer ce défi en opportunité. Nous identifions les domaines où des ressources supplémentaires pourraient être nécessaires et vous guidons sur des options disponibles."
            }
        ],
        services: [
            {
                title: "Création de Blogs",
                description: "Impact maximal en ligne avec nos blogs sur mesure. Contenu optimisé SEO qui positionne votre marque comme autorité dans votre domaine.",
                icon: "mdi:text-box",
                benefits: [
                    "Augmentation du trafic organique",
                    "Positionnement comme expert",
                    "Génération de leads qualifiés",
                    "Contenu evergreen réutilisable"
                ]
            },
            {
                title: "Stratégie de Marketing Musical",
                description: "Pour communiquer des émotions, transmettre un message, pour promouvoir un produit, une marque... Nous créons des soundtracks uniques qui renforcent l'identité de votre marque.",
                icon: "mdi:music",
                benefits: [
                    "Identité sonore distinctive",
                    "Emotion et mémorisation accrues",
                    "Cohérence avec l'image de marque",
                    "Adaptation multi-supports"
                ]
            },
            {
                title: "Publications Social Media",
                description: "Pour renforcer la notoriété, informer et éduquer, promouvoir des produits ou services, interagir avec les clients... Contenu visuel et texte optimisé pour chaque plateforme.",
                icon: "mdi:instagram",
                benefits: [
                    "Engagement communautaire accru",
                    "Visibilité et portée optimisées",
                    "Conversion et ventes boostées",
                    "Fidélisation de la clientèle"
                ]
            },
            {
                title: "Voix Off Professionnelle",
                description: "Pour expliquer, donner des informations supplémentaires, pour ajouter de la profondeur ou de l'émotion à un contenu audiovisuel... Voix off adaptée à votre ton et à votre audience.",
                icon: "mdi:microphone",
                benefits: [
                    "Clarté et professionnalisme",
                    "Adaptation au ton de la marque",
                    "Plusieurs langues disponibles",
                    "Studio professionnel inclus"
                ]
            },
            {
                title: "Nommage de Projet",
                description: "Trouver un nom qui reflète l'essence de votre entreprise: mémorable, distinctif et facile à retenir pour vos clients potentiels. Création d'identité nominale stratégique.",
                icon: "mdi:rename-box",
                benefits: [
                    "Nom unique et protectible",
                    "Mémorabilité optimisée",
                    "Cohérence avec la stratégie",
                    "Disponibilité vérifiée"
                ]
            }
        ],
        process: [
            {
                step: 1,
                title: "Découverte et Analyse",
                description: "Nous analysons votre marque, votre audience et vos objectifs pour comprendre votre contexte unique."
            },
            {
                step: 2,
                title: "Stratégie Créative",
                description: "Développement d'une ligne éditoriale et d'un plan créatif alignés avec votre identité de marque."
            },
            {
                step: 3,
                title: "Production de Contenu",
                description: "Création de contenu varié (texte, image, vidéo, audio) selon les spécifications définies."
            },
            {
                step: 4,
                title: "Optimisation et Publication",
                description: "Optimisation pour les plateformes cibles et publication selon le calendrier établi."
            },
            {
                step: 5,
                title: "Analyse et Amélioration",
                description: "Suivi des performances et ajustements continus pour maximiser l'impact."
            }
        ],
        faq: [
            {
                question: "Quels types de contenu pouvez-vous créer ?",
                answer: "Nous créons tous types de contenu : articles de blog, publications sociales, vidéos, podcasts, infographies, newsletters, scripts, voice over, et bien plus encore."
            },
            {
                question: "Combien de temps faut-il pour voir des résultats ?",
                answer: "Les premiers résultats sont généralement visibles en 2-4 semaines, avec une croissance constante au fil du temps grâce à notre approche stratégique."
            },
            {
                question: "Proposez-vous des solutions pour tous les budgets ?",
                answer: "Oui, nous adaptons nos services à différents budgets avec des packages flexibles et des solutions sur mesure."
            }
        ],
        cta: "Créer avec Passion"
    },
    {
        id: "visual-creation",
        icon: "/images/services/visual-design.png",
        title: "Création Visuelle",
        slug: "visual-creation",
        image: "/images/services/visual-design-hero.png",
        description: "Design graphique professionnel et production audiovisuelle de haute qualité.",
        detail: "Notre équipe de designers et vidéastes créé des visuels percutants qui renforcent votre identité visuelle. Du logo à l'identité complète de marque, en passant par le design print et digital, nous créons des éléments visuels cohérents et mémorables. Nous offrons également des services de production vidéo complète, du tournage au montage, pour des contenus audiovisuels de qualité professionnelle.",
        features: [
            {
                title: "Conception de Logos",
                description: "Création d'identités visuelle uniques et mémorables pour votre marque."
            },
            {
                title: "Design Print & Digital",
                description: "Cartes de visite, flyers, affiches, bannières web et supports marketing variés."
            },
            {
                title: "Montage Vidéo Professionnel",
                description: "Post-production vidéo avec effets, transitions et animation graphique."
            },
            {
                title: "Tournage & Production",
                description: "Services complets de tournage en intérieur et extérieur avec équipement professionnel."
            },
            {
                title: "Animation Graphique & Motion Design",
                description: "Création d'animations 2D/3D et motion design pour vidéos explicatives."
            }
        ],
        cta: "Commencez"
    },
    {
        id: "sponsoring-ads",
        icon: "/images/services/advertising.png",
        title: "Sponsoring & Publicité",
        slug: "sponsoring-ads",
        image: "/images/services/advertising-hero.png",
        description: "Campagnes publicitaires optimisées pour maximiser votre ROI sur toutes les plateformes.",
        detail: "Nous développons et gérons vos campagnes publicitaires pour atteindre votre audience idéale. De la recherche de mots-clés à l'optimisation des enchères, en passant par le ciblage précis et l'analyse des performances, nous maximisons votre retour sur investissement. Notre expertise couvre Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads et d'autres plateformes publicitaires digitales.",
        features: [
            {
                title: "Facebook ADS Manager",
                description: "Gestion complète des campagnes publicitaires sur Facebook et Instagram."
            },
            {
                title: "Google ADS & SEA",
                description: "Campagnes de recherche, display et shopping sur le réseau Google."
            },
            {
                title: "Ciblage Avancé",
                description: "Segmentations précises par intérêts, comportements, démographie et géolocalisation."
            },
            {
                title: "Optimisation des Campagnes",
                description: "Ajustements continus pour améliorer les performances et réduire les coûts."
            },
            {
                title: "Analyse & Reporting",
                description: "Suivi détaillé des indicateurs clés et mesure du ROI des campagnes."
            }
        ],
        cta: "Commencez"
    }
];

export const GET = () => {
    return NextResponse.json({
        ServicesData,
    })
}