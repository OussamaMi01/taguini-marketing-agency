"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface AchievementType {
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

interface SingleAchievementProps {
  achievement: AchievementType;
}

const SingleAchievement: React.FC<SingleAchievementProps> = ({ achievement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10 border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full hover:border-red-300 dark:hover:border-red-500">
        
        {/* Image Container */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <Icon icon="mdi:image-off" className="text-4xl text-gray-400 dark:text-gray-600" />
            </div>
          ) : (
            <>
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white text-xs font-semibold backdrop-blur-sm shadow-lg">
              {achievement.category}
            </span>
          </div>

          {/* View Button - Always visible but changes on hover */}
          <button
            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
              isHovered 
                ? 'bg-red-500 text-white scale-110' 
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm'
            }`}
            aria-label="Voir le projet"
          >
            <Icon icon={isHovered ? "mdi:arrow-right" : "mdi:eye"} className="text-lg" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6">
          {/* Client Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center flex-shrink-0">
              <Icon icon="mdi:account-tie" className="text-red-500 dark:text-red-400 text-sm lg:text-base" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Client</p>
              <p className="font-semibold text-gray-900 dark:text-white truncate">{achievement.client}</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
            {achievement.description}
          </p>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {achievement.results.slice(0, 4).map((result, index) => (
              <div key={index} className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 group-hover:bg-red-50 dark:group-hover:bg-red-900/10 transition-colors duration-300">
                <div className="text-lg lg:text-xl font-bold text-red-500 dark:text-red-400 mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {achievement.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 lg:px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium group-hover:bg-red-100 dark:group-hover:bg-red-900/30 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
            {achievement.tags.length > 3 && (
              <span className="px-2 lg:px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium">
                +{achievement.tags.length - 3}
              </span>
            )}
          </div>

          {/* Duration - Always visible */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                <Icon icon="mdi:clock-outline" className="inline mr-1" />
                {achievement.duration}
              </span>
              <button className="flex items-center gap-1 lg:gap-2 text-red-500 dark:text-red-400 font-semibold text-xs lg:text-sm hover:gap-3 transition-all duration-300">
                En savoir plus
                <Icon icon="mdi:arrow-right" className="text-sm lg:text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Corner - Only visible on hover */}
        <div className={`absolute bottom-0 right-0 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 rounded-bl-2xl transition-all duration-300 ${
          isHovered 
            ? 'border-red-500 dark:border-red-400' 
            : 'border-transparent'
        }`} />
      </div>
    </motion.div>
  );
};

export default SingleAchievement;