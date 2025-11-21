import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Placeholder images - user will replace these
    // Placeholder images - user will replace these
    const images = [
        '/images/slide1-tiny.jpg',
        '/images/slide2-rt.jpg',
        '/images/slide3-ad1.jpg',
        '/images/slide5-patch.jpg',
        '/images/slide4-ad2.jpg'
    ];

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section className="py-16 bg-unik-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Gallery
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        OUR <span className="text-unik-red">PRODUCTS</span>
                    </h3>
                    <div className="w-24 h-1 bg-unik-red mx-auto"></div>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Image Display */}
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-contain"
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-unik-black/70 hover:bg-unik-gold text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-unik-black/70 hover:bg-unik-gold text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-12 h-3 bg-unik-gold'
                                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;
