import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = () => {
    const reviews = [
        {
            name: "Parveen Kumar Bansal",
            role: "Haryana Distributor",
            text: "With over 20 years of experience in this field, I can vouch for UNIK's superior quality. Their products have consistently set the benchmark for durability and performance in the market.",
            rating: 5
        },
        {
            name: "Rajesh Kumar",
            role: "Distributor, Delhi",
            text: "UNIK patches have significantly reduced our return rates. The quality is consistent and the bonding strength is unmatched in the market.",
            rating: 5
        },
        {
            name: "Amit Singh",
            role: "Service Center Owner",
            text: "I've been using UNIK products for 5 years. Whether it's a small puncture or a major repair, I can always trust their radial patches.",
            rating: 5
        },
        {
            name: "Vikram Malhotra",
            role: "Fleet Manager",
            text: "The durability of these patches is incredible. We run a fleet of heavy trucks and UNIK is our go-to for all tyre repairs.",
            rating: 5
        },
        {
            name: "Suresh Reddy",
            role: "Tyre Shop Owner",
            text: "Best value for money. The cold vulcanizing fluid works like magic even in humid conditions.",
            rating: 4
        }
    ];

    return (
        <section className="py-24 bg-unik-black overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                    Testimonials
                </h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
                    TRUSTED BY <span className="text-unik-red">EXPERTS</span>
                </h3>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 px-6"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                        repeatType: "loop"
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-unik-dark-grey p-8 border-l-4 border-unik-red relative"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < review.rating ? "text-unik-gold fill-unik-gold" : "text-gray-600"}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-6 text-lg">"{review.text}"</p>
                            <div>
                                <h4 className="text-white font-bold font-heading text-xl">{review.name}</h4>
                                <p className="text-unik-red text-sm uppercase tracking-wider">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
