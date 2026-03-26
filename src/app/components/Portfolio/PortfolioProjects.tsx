"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  sector: string;
  client: string;
  year: string;
  image?: string; // Make image optional
  tags: string[];
  featured: boolean;
  videoUrl?: string; // Optional video URL
}

interface PortfolioProjectsProps {
  projects: ProjectType[];
}

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return match[2];
  }
  return null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoUrl: string, quality: string = 'hqdefault'): string => {
  const videoId = getYouTubeVideoId(videoUrl);
  if (!videoId) return '';
  
  // Quality options: 'default', 'mqdefault', 'hqdefault', 'sddefault', 'maxresdefault'
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

// Default image to use when no image is provided
const DEFAULT_IMAGE = "/images/default-project.jpg";

const PortfolioProjects: React.FC<PortfolioProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false);

  // Get unique sectors for filter
  const sectors = ["Tous", ...new Set(projects.map(project => project.sector))];

  // Filter projects
  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(project => project.sector === filter);

  // Featured projects
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  // Helper to get project image with fallback
  const getProjectImage = (project: ProjectType): string => {
    if (project.videoUrl) {
      return getYouTubeThumbnail(project.videoUrl) || project.image || DEFAULT_IMAGE;
    }
    return project.image || DEFAULT_IMAGE;
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setFilter(sector)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === sector
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-red-300 dark:hover:border-red-500 h-full">
              {/* Image/Video Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                {project.videoUrl ? (
                  // Video thumbnail with play button overlay
                  <div className="relative w-full h-full">
                    <Image
                      src={getYouTubeThumbnail(project.videoUrl) || project.image || DEFAULT_IMAGE}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                        <Icon icon="mdi:play" className="text-white text-xl ml-1" />
                      </div>
                    </div>
                    {/* Video indicator */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 rounded bg-red-500 text-white text-xs font-semibold">
                        Vidéo
                      </span>
                    </div>
                  </div>
                ) : (
                  // Regular image
                  <Image
                    src={project.image || DEFAULT_IMAGE}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Sector Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.client}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.videoUrl && (
                    <span className="px-2 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-1">
                      <Icon icon="mdi:play" className="text-xs" />
                      Vidéo
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-red-500 dark:text-red-400 font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  Voir les détails
                  <Icon icon="mdi:arrow-right" className="text-base" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                {project.videoUrl ? (
                  // Video thumbnail for small cards
                  <>
                    <Image
                      src={getYouTubeThumbnail(project.videoUrl, 'mqdefault') || project.image || DEFAULT_IMAGE}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                    {/* Small play icon */}
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <Icon icon="mdi:play" className="text-white text-xs ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  // Regular image
                  <Image
                    src={project.image || DEFAULT_IMAGE}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-white font-medium text-sm mb-1">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-xs">
                    {project.sector}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedProject.client} • {selectedProject.year}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setShowVideo(false);
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image/Video */}
              <div className="relative h-64 md:h-96 mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                {selectedProject.videoUrl && showVideo ? (
                  // Embedded YouTube video
                  <div className="w-full h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedProject.videoUrl!)}?autoplay=1`}
                      title={selectedProject.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  // Image or video thumbnail
                  <div className="relative w-full h-full">
                    <Image
                      src={
                        selectedProject.videoUrl 
                          ? getYouTubeThumbnail(selectedProject.videoUrl, 'maxresdefault') || selectedProject.image || DEFAULT_IMAGE
                          : selectedProject.image || DEFAULT_IMAGE
                      }
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    {selectedProject.videoUrl && (
                      // Play button overlay for video
                      <button
                        onClick={() => setShowVideo(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
                      >
                        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
                          <Icon icon="mdi:play" className="text-white text-3xl ml-2" />
                        </div>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Description du Projet
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.videoUrl && !showVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="mb-6 flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                      <Icon icon="mdi:play" />
                      Regarder la vidéo
                    </button>
                  )}
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Défis & Solutions
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ce projet présentait des défis uniques que nous avons surmontés grâce à notre expertise et notre approche créative. Les résultats ont dépassé les attentes du client.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Détails
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Secteur</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedProject.sector}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedProject.client}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Année</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedProject.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {selectedProject.videoUrl && (
                          <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-1">
                            <Icon icon="mdi:play" className="text-xs" />
                            Vidéo disponible
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300">
                    Voir plus de projets similaires
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PortfolioProjects;