import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CityMarker = ({ top, left, name, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute"
            style={{ top: `${top}%`, left: `${left}%` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Pulse Effect */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 2, 2], opacity: [0.7, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: delay }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-unik-red rounded-full opacity-50"
            ></motion.div>

            {/* Core Dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: delay }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-unik-gold rounded-full border-2 border-unik-black z-10 cursor-pointer"
            ></motion.div>

            {/* Label */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.5 }}
                className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap z-20 pointer-events-none ${isHovered ? 'scale-110 text-unik-gold' : 'text-gray-300'} transition-all duration-300`}
            >
                <span className="bg-unik-black/80 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border border-gray-800 backdrop-blur-sm">
                    {name}
                </span>
            </motion.div>
        </div>
    );
};

const PresenceMap = () => {
    // Adjusted coordinates for the new map image
    const cities = [
        { name: 'Punjab', top: 25, left: 30 },
        { name: 'Haryana', top: 28, left: 33 },
        { name: 'Delhi', top: 30, left: 35 },
        { name: 'Rajasthan', top: 40, left: 25 },
        { name: 'Uttar Pradesh', top: 35, left: 45 },
        { name: 'Bihar', top: 40, left: 60 },
        { name: 'Gujarat', top: 50, left: 20 },
        { name: 'Mumbai', top: 65, left: 25 },
        { name: 'Bangalore', top: 80, left: 35 },
        { name: 'Kolkata', top: 48, left: 70 },
        { name: 'Hyderabad', top: 65, left: 40 },
    ];

    return (
        <section className="py-24 bg-unik-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Nationwide Reach
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        SERVING ACROSS <span className="text-unik-red">INDIA</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our premium tyre repair solutions are trusted by professionals in every corner of the country.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto aspect-[4/5] md:aspect-video bg-unik-dark-grey/30 rounded-3xl border border-gray-800 p-8 backdrop-blur-sm flex items-center justify-center">
                    {/* Map Container */}
                    <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
                        {/* Map Image */}
                        <img
                            src="/images/india-map.png"
                            alt="Map of India"
                            className="w-full h-full object-contain opacity-80 drop-shadow-[0_0_15px_rgba(214,176,106,0.2)]"
                        />

                        {/* City Markers */}
                        {cities.map((city, index) => (
                            <CityMarker
                                key={index}
                                top={city.top}
                                left={city.left}
                                name={city.name}
                                delay={index * 0.2}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PresenceMap;
