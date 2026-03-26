"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleTeamMember from "./SingleTeamMember";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Team data with circular images
  const defaultTeamMembers = [
    {
      id: 1,
      name: "Wassim Souissi",
      position: "CEO MANAGER",
      role: "Gérant",
      image: "/images/team/wassim-souissi.png",
    },
    {
      id: 2,
      name: "Farah Derbel",
      position: "Finance & Administration Manager",
      role: "Finance",
      image: "/images/team/farah-derbel.png",
    },
    {
      id: 3,
      name: "Yasser Slimen",
      position: "Video Content Director",
      role: "Production Vidéo",
      image: "/images/team/yasser-slimen.png",
    },
    {
      id: 4,
      name: "Ahmad Jmal",
      position: "Graphic Designer",
      role: "Design",
      image: "/images/team/ahmad-jmal.png",
    },
    {
      id: 5,
      name: "Amal Souissi",
      position: "Media Buyer",
      role: "Publicité",
      image: "/images/team/amal-souissi.png",
    },
    {
      id: 6,
      name: "Oussema Kassar",
      position: "Community Manager",
      role: "Social Media",
      image: "/images/team/oussema-kassar.png",
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        const transformedTeam = data.team?.map((member: any, index: number) => ({
          id: member.id || index + 1,
          name: member.name || defaultTeamMembers[index]?.name || "Membre d'équipe",
          position: member.position || defaultTeamMembers[index]?.position || "Poste",
          role: member.role || defaultTeamMembers[index]?.role || "Rôle",
          image: member.image || defaultTeamMembers[index]?.image || `/images/team/member${index + 1}.png`,
        })) || defaultTeamMembers;

        setTeamMembers(transformedTeam);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setTeamMembers(defaultTeamMembers);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Carousel settings
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="animate-pulse text-center">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-6"></div>
            <div className="h-12 w-96 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-12"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="text-center">
                  <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-800 mx-auto mb-6"></div>
                  <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-2"></div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6">
            <Icon icon="mdi:account-group" className="text-gray-600 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
              Notre Équipe
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white block">
              Rencontrez
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100">
              notre équipe
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Des professionnels passionnés dédiés à votre succès
          </p>
        </motion.div>

        {/* Team Members - Grid for Desktop, Carousel for Mobile */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teamMembers.map((member) => (
              <SingleTeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="px-4">
                <SingleTeamMember member={member} />
              </div>
            ))}
          </Slider>
        </div>

        
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-gray-100 dark:border-gray-800 hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-gray-100 dark:border-gray-800 hidden lg:block" />
    </section>
  );
};

export default Team;