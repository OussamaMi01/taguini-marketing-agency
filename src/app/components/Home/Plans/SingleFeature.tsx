import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SingleFeatureProps {
  text: string;
  icon?: string;
  iconColor?: string;
  bgColor?: string;
  showAnimation?: boolean;
  animationDelay?: number;
}

const SingleFeature = ({ 
  text, 
  icon = "mdi:check-circle", 
  iconColor = "text-green-500 dark:text-green-400",
  bgColor = "bg-green-50 dark:bg-green-900/20",
  showAnimation = true,
  animationDelay = 0
}: SingleFeatureProps) => {
  return (
    <motion.li 
      className="flex items-start gap-3 py-2 group"
      initial={showAnimation ? { opacity: 0, y: 5 } : false}
      animate={showAnimation ? { opacity: 1, y: 0 } : false}
      transition={showAnimation ? { 
        duration: 0.3, 
        delay: animationDelay 
      } : {}}
      whileHover={{ x: 5 }}
    >
      {/* Icon Container */}
      <div className={`w-6 h-6 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110`}>
        <Icon
          icon={icon}
          width="14"
          height="14"
          className={`font-semibold ${iconColor}`}
        />
      </div>
      
      {/* Text */}
      <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.li>
  );
};

export default SingleFeature;