"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Partners = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const sliderRef = useRef<Slider>(null);

  // Default partners data with logo.png files
  const defaultPartners = [
    { id: 1, name: "Client 1", logo: "/images/partners/client1-logo.png", url: "#" },
    { id: 2, name: "Client 2", logo: "/images/partners/client2-logo.png", url: "#" },
    { id: 3, name: "Client 3", logo: "/images/partners/client3-logo.png", url: "#" },
    { id: 4, name: "Client 4", logo: "/images/partners/client4-logo.png", url: "#" },
    { id: 5, name: "Client 5", logo: "/images/partners/client5-logo.png", url: "#" },
    { id: 6, name: "Client 6", logo: "/images/partners/client6-logo.png", url: "#" },
    { id: 7, name: "Client 7", logo: "/images/partners/client7-logo.png", url: "#" },
    { id: 8, name: "Client 8", logo: "/images/partners/client8-logo.png", url: "#" },
    { id: 9, name: "Client 9", logo: "/images/partners/client9-logo.png", url: "#" },
    { id: 10, name: "Client 10", logo: "/images/partners/client10-logo.png", url: "#" },
    { id: 11, name: "Client 11", logo: "/images/partners/client11-logo.png", url: "#" },
    { id: 12, name: "Client 12", logo: "/images/partners/client12-logo.png", url: "#" },
    { id: 13, name: "Client 13", logo: "/images/partners/client13-logo.png", url: "#" },
    { id: 14, name: "Client 14", logo: "/images/partners/client14-logo.png", url: "#" },
    { id: 15, name: "Client 15", logo: "/images/partners/client15-logo.png", url: "#" },
    { id: 16, name: "Client 16", logo: "/images/partners/client16-logo.png", url: "#" },
    { id: 17, name: "Client 17", logo: "/images/partners/client17-logo.png", url: "#" },
    { id: 18, name: "Client 18", logo: "/images/partners/client18-logo.png", url: "#" },
    { id: 19, name: "Client 19", logo: "/images/partners/client19-logo.png", url: "#" },
    { id: 20, name: "Client 20", logo: "/images/partners/client20-logo.png", url: "#" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        // Transform API data to use logo.png if needed
        const transformedPartners = data.partners?.map((partner: any, index: number) => ({
          id: partner.id || index + 1,
          name: partner.name || `Client ${index + 1}`,
          logo: partner.logo || `/images/partners/client${index + 1}-logo.png`,
          url: partner.url || "#"
        })) || defaultPartners;
        
        setPartners(transformedPartners)
      } catch (error) {
        console.error('Error fetching partners:', error)
        setPartners(defaultPartners)
      }
    }

    fetchData()
  }, [])

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
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
      sliderRef.current.slickGoTo(index * 5);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/5 to-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6">
            <Icon icon="mdi:handshake" className="text-red-500 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
              Nos Partenaires & Clients
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Ils nous font confiance
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
              pour leur succès digital
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Des entreprises de toutes tailles qui ont choisi Taguini Marketing pour transformer 
            leur présence digitale et atteindre leurs objectifs.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Logo Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {partners.map((partner) => (
              <div key={partner.id} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  {/* Container with flexible height */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10 aspect-[4/3] min-h-[120px] flex items-center justify-center p-4">
                    {/* Logo Image Container - Takes full space */}
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          fill
                          className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                          sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                          quality={100}
                          onError={(e) => {
                            // Fallback if image fails to load
                            console.error(`Failed to load logo: ${partner.logo}`);
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center">
                                  <div class="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                                    <span class="text-white font-bold text-lg">${partner.name.charAt(0)}</span>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/5 rounded-xl transition-all duration-500"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500/0 group-hover:border-red-500/30 rounded-tr-lg transition-all duration-500"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500/0 group-hover:border-red-500/30 rounded-bl-lg transition-all duration-500"></div>
                  </div>
                  
                  {/* Partner name tooltip on hover */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                      {partner.name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

       
        </div>

       
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/20 dark:border-red-400/20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/20 dark:border-red-400/20 hidden lg:block" />
    </section>
  );
};

export default Partners;