import React from 'react';
import { motion } from 'framer-motion';

const OurPresence = () => {
    const stats = [
        {
            id: 1,
            label: 'Year Established',
            value: '1990',
            image: 'https://placehold.co/150x150/1a1a1a/d6b06a?text=1990'
        },
        {
            id: 2,
            label: 'Cities',
            value: '55',
            image: 'https://placehold.co/150x150/1a1a1a/d6b06a?text=Cities'
        },
        {
            id: 3,
            label: 'Employees',
            value: '500',
            image: 'https://placehold.co/150x150/1a1a1a/d6b06a?text=Employees'
        },
        {
            id: 4,
            label: 'Support',
            value: '24/7',
            image: 'https://placehold.co/150x150/1a1a1a/d6b06a?text=Support'
        }
    ];

    return (
        <section className="py-20 bg-unik-black border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Our Presence
                    </h2>
                    <div className="w-24 h-1 bg-unik-red mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={stat.id}
                            className="bg-unik-dark-grey border border-gray-800 p-8 rounded-xl shadow-lg hover:border-unik-gold/30 transition-all duration-300 text-center group"
                        >
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-unik-red p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                                    <img
                                        src={stat.image}
                                        alt={stat.label}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-unik-gold transition-colors">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium group-hover:text-gray-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPresence;
