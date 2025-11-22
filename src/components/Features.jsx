import React from 'react';
import { Cpu, Layers, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const Features = () => {
    const features = [
        {
            icon: <Cpu size={48} />,
            title: "German Technology",
            description: "Engineered with precision German technology for superior durability and performance."
        },
        {
            icon: <Layers size={48} />,
            title: "Genuine Ply",
            description: "We use only genuine ply in our patches to ensure maximum strength and flexibility."
        },
        {
            icon: <Headphones size={48} />,
            title: "24/7 Support",
            description: "Round-the-clock support to assist you whenever you need us."
        }
    ];

    return (
        <section id="features" className="py-24 bg-unik-dark-grey relative overflow-hidden">
            {/* Tyre Tread Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-tyre-tread pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Why Choose Us
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        UNIK <span className="text-unik-red">ADVANTAGE</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We combine German engineering with high-quality materials to deliver tyre repair solutions that stand the test of time. Trust the experts for safety and performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="h-full"
                            >
                                <TiltCard className="h-full bg-unik-black/50 p-8 border border-gray-800 hover:border-unik-gold transition-colors duration-300 text-center group rounded-xl">
                                    <div className="w-20 h-20 mx-auto bg-unik-dark-grey rounded-full flex items-center justify-center text-unik-red mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-unik-gold transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </TiltCard>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
