import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(50);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = text;

            setDisplayText(current => {
                if (isDeleting) {
                    return fullText.substring(0, current.length - 1);
                } else {
                    return fullText.substring(0, current.length + 1);
                }
            });

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
                setTypingSpeed(30); // Deleting speed
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(50); // Typing speed
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed, text]);

    return (
        <span className="inline-block min-h-[3.5rem]">
            {displayText}
            <span className="animate-pulse text-unik-gold">|</span>
        </span>
    );
};

const Hero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-unik-black pt-20">
            {/* Background with Glowing Dots Pattern */}
            <div className="absolute inset-0 z-0 bg-unik-black">
                {/* Dot Pattern */}
                <div className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #d6b06a 1.5px, rgba(214, 176, 106, 0.2) 4px, transparent 5px)',
                        backgroundSize: '30px 30px'
                    }}
                ></div>

                {/* Glowing Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-unik-gold/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-unik-gold/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-unik-black/50 via-transparent to-unik-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-center"
                >
                    <img
                        src="/images/unik-logo.png"
                        alt="UNIK Logo"
                        className="w-64 md:w-80 lg:w-96 drop-shadow-[0_0_25px_rgba(214,176,106,0.3)] hover:drop-shadow-[0_0_35px_rgba(214,176,106,0.5)] transition-all duration-500"
                    />
                </motion.div>

                {/* Right Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                        UNIK <span className="text-unik-red">TYRE</span><br />
                        REPAIR <span className="text-unik-gold">PRODUCTS</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed h-24 md:h-auto">
                        <TypewriterText text="Engineered for safety and durability. The trusted choice for professional tyre repair solutions since 1990." />
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToProducts}
                        className="bg-unik-red text-white px-10 py-4 rounded-none font-bold uppercase tracking-widest border border-unik-red hover:bg-transparent hover:text-unik-red hover:border-unik-red transition-all duration-300 shadow-[0_0_20px_rgba(211,47,47,0.4)]"
                    >
                        Find Your Patch
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-gray-400 flex flex-col items-center gap-2 cursor-pointer"
                    onClick={scrollToProducts}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={24} className="text-unik-gold" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
