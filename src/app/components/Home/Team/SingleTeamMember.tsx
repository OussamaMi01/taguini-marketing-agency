"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface TeamMemberType {
  id: number;
  name: string;
  position: string;
  role: string;
  image: string;
}

interface SingleTeamMemberProps {
  member: TeamMemberType;
}

const SingleTeamMember: React.FC<SingleTeamMemberProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group text-center"
    >
      {/* Circular Image Container */}
      <div className="relative mb-6 mx-auto">
        {/* Outer ring effect on hover */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isHovered 
            ? 'scale-110 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700' 
            : 'scale-100 bg-transparent'
        }`}></div>
        
        {/* Image Wrapper - Circular */}
        <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-500">
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {member.role}
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          )}
          
          {/* Hover Overlay - Circular */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
            <span className="text-white text-sm font-medium px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
              {member.role}
            </span>
          </div>
        </div>

        {/* Decorative dots around image on hover */}
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
      </div>

      {/* Name and Position */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {member.position}
        </p>
      </div>

      {/* Role Indicator Line */}
      <div className={`mt-4 h-1 w-12 mx-auto bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-500 ${
        isHovered ? 'w-20 bg-gray-400 dark:bg-gray-500' : 'w-12'
      }`}></div>
    </motion.div>
  );
};

export default SingleTeamMember;