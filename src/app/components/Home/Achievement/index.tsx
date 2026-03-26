"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Achievements = () => {
  const [achievements, setAchievements] = useState<any[]>([]);
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Use placeholder images or existing images
  const defaultAchievements = [
    {
      id: 1,
      title: "Stratégie Social Media Luxe",
      client: "Maison Élégante Paris",
      image: "/images/achievements/achievement1.jpg", // Changed to .jpg
      category: "Social Media",
    },
    {
      id: 2,
      title: "Refonte Identité Visuelle",
      client: "TechVision Solutions",
      image: "/images/achievements/achievement2.jpg", // Changed to .jpg
      category: "Branding",
    },
    {
      id: 3,
      title: "Campagne Performance",
      client: "EcoLife Stores",
      image: "/images/achievements/achievement3.jpg", // Changed to .jpg
      category: "Publicité",
    },
    {
      id: 4,
      title: "Série Vidéo Émotionnelle",
      client: "HumanCare Foundation",
      image: "/images/achievements/achievement4.jpg", // Changed to .jpg
      category: "Vidéographie",
    },
    {
      id: 5,
      title: "Plateforme E-commerce",
      client: "Artisanat du Monde",
      image: "/images/achievements/achievement5.jpg", // Changed to .jpg
      category: "Web Design",
    },
    {
      id: 6,
      title: "Application Mobile",
      client: "WellnessPro",
      image: "/images/achievements/achievement1.jpg", // Reuse first image
      category: "App Design",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        const transformedAchievements = data.achievements?.map((achievement: any, index: number) => ({
          id: achievement.id || index + 1,
          title: achievement.title || `Projet ${index + 1}`,
          client: achievement.client || `Client ${index + 1}`,
          image: achievement.image || `/images/achievements/achievement${(index % 5) + 1}.jpg`, // Changed to .jpg
          category: achievement.category || "Marketing",
        })) || defaultAchievements;
        
        setAchievements(transformedAchievements)
      } catch (error) {
        console.error('Error fetching achievements:', error)
        setAchievements(defaultAchievements)
      }
    }

    fetchData()
  }, [])

  // Handle image errors
  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Carousel settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Navigation functions
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/30 mb-6">
            <Icon icon="mdi:image-multiple" className="text-red-500 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
              Galerie Projets
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Nos Réalisations
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              en Images
            </span>
          </h2>
        </motion.div>

        {/* Image Carousel */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="px-2 lg:px-4">
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  {/* Main Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                    {imageErrors[achievement.id] ? (
                      // Fallback when image fails to load
                      <div className="w-full h-full flex flex-col items-center justify-center p-8">
                        <Icon icon="mdi:image-off" className="text-4xl text-gray-400 dark:text-gray-600 mb-4" />
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-lg">
                              {achievement.client.charAt(0)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {achievement.title}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={achievement.image}
                          alt={achievement.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={90}
                          onError={() => handleImageError(achievement.id)}
                          unoptimized={true} // Use if images are local files
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Category Tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold">
                            {achievement.category}
                          </span>
                        </div>
                        
                        {/* View Icon */}
                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center">
                            <Icon icon="mdi:eye" className="text-lg text-gray-700 dark:text-gray-300" />
                          </div>
                        </div>
                        
                        {/* Project Info (on hover) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4">
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {achievement.client}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={goToPrev}
              className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 group shadow-lg hover:shadow-xl"
              aria-label="Projet précédent"
            >
              <Icon 
                icon="mdi:chevron-left" 
                className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" 
              />
            </button>
            
            {/* Current Project Indicator */}
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Projet {activeIndex + 1} sur {achievements.length}
              </div>
              <div className="flex items-center gap-2">
                {achievements.slice(0, Math.min(8, achievements.length)).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i 
                        ? "w-8 bg-red-500 dark:bg-red-400" 
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-red-300 dark:hover:bg-red-600"
                    }`}
                    aria-label={`Aller au projet ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button
              onClick={goToNext}
              className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 group shadow-lg hover:shadow-xl"
              aria-label="Projet suivant"
            >
              <Icon 
                icon="mdi:chevron-right" 
                className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" 
              />
            </button>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Achievements;