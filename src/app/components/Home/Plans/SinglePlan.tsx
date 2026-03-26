import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type planstype = {
    id: string;
    type: string;
    price: string;
    period: string;
    color: string;
    text: string;
    benefits: string[];
    features: string[];
}

interface SinglePlanProps {
    plan: planstype;
    onSelect: (plan: planstype) => void;
}

const SinglePlan = ({ plan, onSelect }: SinglePlanProps) => {
    const { id, type, price, period, color, text, benefits, features } = plan;
    
    const colorClasses = {
        bronze: {
            bg: 'bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900',
            border: 'border-amber-600',
            hover: 'hover:border-amber-500',
            badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
            button: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
        },
        silver: {
            bg: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600',
            border: 'border-gray-400',
            hover: 'hover:border-gray-300',
            badge: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
            button: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
        },
        gold: {
            bg: 'bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700',
            border: 'border-yellow-500',
            hover: 'hover:border-yellow-400',
            badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
            button: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
        }
    };
    
    const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.bronze;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="h-full"
        >
            <div className={`relative h-full min-h-[650px] rounded-2xl overflow-hidden border ${colors.border} ${colors.hover} transition-all duration-500 hover:shadow-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm flex flex-col group`}>
                {/* Plan Header with color gradient */}
                <div className={`${colors.bg} p-6 lg:p-8 text-center relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-white/20 backdrop-blur-sm">
                        <Icon icon="mdi:crown" className="text-white" />
                        <span className="text-white font-semibold text-sm lg:text-base">{type}</span>
                    </div>
                    
                    {/* Period */}
                    <div className={`inline-block px-3 py-1 rounded-lg ${colors.badge} text-sm font-medium mb-4`}>
                        {period}
                    </div>
                    
                    {/* Price */}
                    <div className="mb-4">
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{price}</div>
                        <div className="text-white/80 text-base lg:text-lg">DH / mois</div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 text-base lg:text-lg mb-0">{text}</p>
                </div>
                
                {/* Plan Body */}
                <div className="p-6 lg:p-8 flex-1">
                    {/* Key Features */}
                    <div className="mb-6">
                        <h4 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-3">Inclus:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {features.slice(0, 4).map((feature, index) => (
                                <span key={index} className={`px-2 py-1 rounded-lg ${colors.badge} text-xs lg:text-sm font-medium`}>
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Benefits List - Limited to 5 items */}
                    <div className="space-y-2">
                        <h4 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2">Avantages:</h4>
                        {benefits.slice(0, 5).map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div className={`w-5 h-5 rounded-full ${colors.badge} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <Icon icon="mdi:check" className="text-current text-xs" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* CTA Button */}
                <div className="p-6 lg:p-8 pt-0">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelect(plan)}
                        className={`w-full ${colors.button} text-white font-semibold py-3 lg:py-4 px-6 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                        <Icon icon="mdi:rocket-launch" className="text-lg" />
                        <span className="text-sm lg:text-base">Démarrez</span>
                    </motion.button>
                    
                    {/* Optional: Add a popular badge for Gold plan */}
                    {color === 'gold' && (
                        <div className="text-center mt-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold">
                                <Icon icon="mdi:star" />
                                LE PLUS POPULAIRE
                            </span>
                        </div>
                    )}
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
            </div>
        </motion.div>
    );
}

export default SinglePlan;