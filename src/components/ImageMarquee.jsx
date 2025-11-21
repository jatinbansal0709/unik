import React from 'react';
import { motion } from 'framer-motion';

const ImageMarquee = () => {
    // Manual list of gallery images
    const galleryImages = [
        '/images/tiny-round.jpg',
        '/images/mini-round.jpg',
        '/images/small-round.jpg',
        '/images/small-oval.jpg',
        '/images/mini-oval.jpg',
        '/images/cycle-round.jpg',
        '/images/tp-5.jpg',
        '/images/cvf-75ml.png'
    ];

    // Duplicate the array to create a seamless loop
    const marqueeImages = [...galleryImages, ...galleryImages];

    return (
        <section className="py-12 bg-unik-black overflow-hidden border-t border-gray-900">
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-unik-black to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-unik-black to-transparent pointer-events-none"></div>

                <motion.div
                    className="flex gap-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                        repeatType: "loop"
                    }}
                    style={{ width: "fit-content" }}
                >
                    {marqueeImages.map((img, index) => (
                        <div
                            key={index}
                            className="w-32 h-24 md:w-40 md:h-32 flex-shrink-0 bg-transparent rounded-xl overflow-hidden p-2"
                        >
                            <div className="w-full h-full rounded-lg overflow-hidden">
                                <img
                                    src={img}
                                    alt={`Gallery Image ${index}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ImageMarquee;
