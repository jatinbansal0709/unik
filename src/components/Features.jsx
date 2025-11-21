import React from 'react';
import { ShieldCheck, Award, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: <Flag size={48} />,
            title: "Made in India",
            description: "Proudly manufactured in India with indigenous technology and materials."
        },
        {
            icon: <ShieldCheck size={48} />,
            title: "High Durability",
            description: "Engineered to withstand extreme conditions and heavy loads."
        },
        {
            icon: <Award size={48} />,
            title: "Quality Assured",
            description: "Rigorously tested to meet international safety and performance standards."
        }
    ];

    return (
        <section id="features" className="py-24 bg-unik-dark-grey relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-unik-black/50 p-8 border border-gray-800 hover:border-unik-gold transition-colors duration-300 text-center group"
                        >
                            <div className="w-20 h-20 mx-auto bg-unik-dark-grey rounded-full flex items-center justify-center text-unik-red mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-unik-gold transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
