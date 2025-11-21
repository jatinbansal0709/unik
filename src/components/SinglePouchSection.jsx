import React from 'react';
import { motion } from 'framer-motion';

const SinglePouchSection = () => {
    return (
        <section className="w-full bg-unik-black py-12 relative overflow-hidden border-b border-gray-900">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-unik-gold/5 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-heading font-bold text-unik-gold text-glow uppercase tracking-wider leading-tight"
                >
                    India's First Single Pouch Packaging of Patches
                </motion.h2>
            </div>
        </section>
    );
};

export default SinglePouchSection;
