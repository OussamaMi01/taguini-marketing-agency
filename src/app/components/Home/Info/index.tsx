"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SingleTestimonial from "./SingleTestimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Default testimonials data from your provided content
  const defaultTestimonials = [
    {
      id: 1,
      review: "En tant que gérant de l'agence immobilière RE/MAX à Sfax, je suis pleinement satisfait des services de communication de Taguini Marketing. Leur créativité et leur professionnalisme ont renforcé notre présence en ligne de manière significative.",
      name: "Sami HENTATI",
      post: "VIP COIFFEUR SAMI",
      company: "RE/MAX Sfax",
      rating: 5,
      image: "/images/testimonials/client1.jpg"
    },
    {
      id: 2,
      review: "L'équipe de Taguini Marketing a une créativité sans limites. Ils ont su créer des vidéos publicitaires uniques et originales qui ont vraiment captivé notre public cible. Leur capacité à innover est remarquable !",
      name: "Emna Maatoug",
      post: "Créatrice de la marque",
      company: "Myriam FS",
      rating: 5,
      image: "/images/testimonials/client2.jpg"
    },
    {
      id: 3,
      review: "Service rapide, équipe très professionnelle rapport qualité prix par apport au marché service impeccable à un prix très raisonnable. Merci Taguini",
      name: "Iskander SALLEM",
      post: "CEO & Founder",
      company: "Staffing Tunisia",
      rating: 5,
      image: "/images/testimonials/client3.jpg"
    },
    {
      id: 4,
      review: "Nous travaillons avec Taguini Marketing dès le commencement, et ils ont été un partenaire essentiel dans notre croissance continue. Leur compréhension approfondie de nos besoins et leur engagement envers notre succès sont inestimables.",
      name: "Mohamed HADJ TAIEB",
      post: "Gérant",
      company: "FlashPharma",
      rating: 5,
      image: "/images/testimonials/client4.jpg"
    },
    {
      id: 5,
      review: "En tant que gérant de FlashPharma, je suis ravi des services de communication de Taguini Marketing. Leur approche dynamique a boosté notre visibilité en ligne. Une recommandation chaleureuse pour leur professionnalisme et leur impact positif.",
      name: "Ahmed Mehiri",
      post: "Gérant",
      company: "Terre de Senteurs",
      rating: 5,
      image: "/images/testimonials/client5.jpg"
    },
    {
      id: 6,
      review: "Taguini Marketing a été un partenaire inestimable pour Terre de Senteurs. Leur expertise en marketing digital a considérablement boosté notre visibilité en ligne et a conduit à une croissance significative de notre clientèle.",
      name: "Yassine Mhiri",
      post: "Directeur Formation",
      company: "Karray Group",
      rating: 5,
      image: "/images/testimonials/client6.jpg"
    },
    {
      id: 7,
      review: "Nous sommes ravis de partager notre expérience positive avec Taguini Marketing. En tant que Karray Group, une boîte de formation internationale, nous avons trouvé en Taguini Marketing un partenaire de confiance pour notre stratégie de marketing digital.",
      name: "Daly Jmal",
      post: "Gérant",
      company: "Remax Concept",
      rating: 5,
      image: "/images/testimonials/client7.jpg"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        // Transform API data if available
        const transformedTestimonials = data.testimonials?.map((testimonial: any, index: number) => ({
          id: testimonial.id || index + 1,
          review: testimonial.review || defaultTestimonials[index]?.review || "Excellent service !",
          name: testimonial.name || defaultTestimonials[index]?.name || "Client",
          post: testimonial.post || defaultTestimonials[index]?.post || "CEO",
          company: testimonial.company || defaultTestimonials[index]?.company || "Entreprise",
          rating: testimonial.rating || 5,
          image: testimonial.image || `/images/testimonials/client${(index % 7) + 1}.jpg`
        })) || defaultTestimonials;
        
        setTestimonials(transformedTestimonials)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
        setTestimonials(defaultTestimonials)
      }
    }

    fetchData()
  }, [])

  // Carousel settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
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
      setActiveSlide(index);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/5 to-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6">
            <Icon icon="mdi:message-text" className="text-red-500 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
              Témoignages Clients
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Ils nous font
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              confiance
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez ce que nos clients disent de notre collaboration et des résultats obtenus.
          </p>

          {/* Overall Rating */}
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} icon="mdi:star" className="text-2xl text-yellow-500 dark:text-yellow-400" />
              ))}
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400">Basé sur {testimonials.length} avis clients</div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </Slider>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 group shadow-lg"
              aria-label="Témoignage précédent"
            >
              <Icon 
                icon="mdi:chevron-left" 
                className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" 
              />
            </button>
            
            {/* Navigation Dots */}
            <div className="flex items-center gap-2">
              {[...Array(Math.min(5, Math.ceil(testimonials.length / 3)))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(activeSlide / 3) === i 
                      ? "w-8 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500" 
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-red-300 dark:hover:bg-red-600"
                  }`}
                  aria-label={`Aller au slide ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 group shadow-lg"
              aria-label="Témoignage suivant"
            >
              <Icon 
                icon="mdi:chevron-right" 
                className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" 
              />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          {[
            { icon: "mdi:check-circle", label: "100% Satisfaction garantie", value: "Garantie" },
            { icon: "mdi:clock-fast", label: "Support réactif 24h/24", value: "Support" },
            { icon: "mdi:shield-check", label: "Confidentialité assurée", value: "Sécurité" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center flex-shrink-0">
                <Icon icon={item.icon} className="text-2xl text-red-500 dark:text-red-400" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{item.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{item.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/20 dark:border-red-400/20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/20 dark:border-red-400/20 hidden lg:block" />
    </section>
  );
};

export default Testimonials;