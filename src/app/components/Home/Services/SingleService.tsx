"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceType = {
    icon: string; // PNG icon path
    title: string;
    slug: string;
    description: string;
    features?: string[];
    cta?: string;
}

const SingleService = ({ service }: { service: ServiceType }) => {
    const { icon, title, description, slug, features = [], cta = "Commencez" } = service;
    
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="h-full"
        >
            <div className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-600/10 flex flex-col group">
                {/* Icon and Title */}
                <div className="p-6 lg:p-8 flex-1">
                    <div className="flex items-start gap-4 mb-4">
                        {/* PNG Icon Container - Removed red background */}
                        <div className="relative w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 p-2">
                            <Image
                                src={icon}
                                alt={`${title} icon`}
                                width={40}
                                height={40}
                                className="w-full h-full object-contain"
                                // REMOVED: style={{ filter: 'brightness(0) invert(1)' }}
                                quality={100}
                            />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors pt-1">
                            {title}
                        </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Features List (if any) */}
                    {features.length > 0 && (
                        <div className="space-y-2 mb-6">
                            {features.slice(0, 3).map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Icon 
                                        icon="mdi:check-circle" 
                                        className="text-green-500 dark:text-green-400 text-sm flex-shrink-0" 
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* CTA Button */}
                <div className="p-6 lg:p-8 pt-0 border-t border-gray-100 dark:border-gray-700">
                    <Link
                        href={`/services/${slug}`}
                        className="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/25 dark:hover:shadow-red-600/25 transition-all duration-300"
                    >
                        <span>{cta}</span>
                        <Icon 
                            icon="mdi:arrow-right" 
                            className="group-hover/btn:translate-x-1 transition-transform" 
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default SingleService;