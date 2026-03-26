"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface TestimonialType {
  id: number;
  review: string;
  name: string;
  post: string;
  company: string;
  rating: number;
  image: string;
}

interface SingleTestimonialProps {
  testimonial: TestimonialType;
}

const SingleTestimonial: React.FC<SingleTestimonialProps> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Truncate long reviews
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      {/* Testimonial Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10 border border-gray-200 dark:border-gray-700 transition-all duration-500 h-full p-6 lg:p-8 hover:border-red-300 dark:hover:border-red-500">
        
        {/* Quote Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center">
            <Icon icon="mdi:format-quote-open" className="text-2xl text-red-500 dark:text-red-400" />
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {isExpanded ? testimonial.review : truncateText(testimonial.review)}
          </p>
          {testimonial.review.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-red-500 dark:text-red-400 font-medium text-sm hover:text-red-600 dark:hover:text-red-300 transition-colors flex items-center gap-1"
            >
              {isExpanded ? 'Voir moins' : 'Lire la suite'}
              <Icon 
                icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"} 
                className="text-lg" 
              />
            </button>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i} 
              icon={i < testimonial.rating ? "mdi:star" : "mdi:star-outline"} 
              className="text-xl text-yellow-500 dark:text-yellow-400" 
            />
          ))}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {testimonial.rating}.0/5
          </span>
        </div>

        {/* Client Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          {/* Avatar */}
          <div className="relative">
            {imageError ? (
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                  onError={() => setImageError(true)}
                />
              </div>
            )}
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-gray-800 flex items-center justify-center">
              <Icon icon="mdi:check" className="text-white text-xs" />
            </div>
          </div>

          {/* Client Details */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1 truncate">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 truncate">
              {testimonial.post}
            </p>
            <p className="text-sm text-red-500 dark:text-red-400 font-medium truncate">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Social Proof Icon */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Icon icon="mdi:thumb-up" className="text-2xl text-green-500" />
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-red-500/30 dark:border-red-400/30 rounded-bl-2xl" />
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;