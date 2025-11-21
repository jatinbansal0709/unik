import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';

const ProductShowcase = () => {
    const navigate = useNavigate();
    // Select 6 random products for the featured section
    const [featuredProducts] = useState(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    });

    return (
        <section id="products" className="py-24 bg-unik-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Featured Products
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        PREMIUM <span className="text-unik-red">SELECTION</span>
                    </h3>
                    <div className="w-24 h-1 bg-unik-red mx-auto mb-10"></div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                to={`/category/${cat.id}`}
                                className="px-4 py-2 md:px-6 md:py-3 border border-gray-700 text-gray-400 hover:border-unik-gold hover:text-unik-gold transition-all duration-300 font-medium uppercase tracking-wider text-xs md:text-sm rounded-lg"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Product Grid - 2 cols on mobile, 3 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {featuredProducts.map((product) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            key={product.id}
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="group relative bg-unik-dark-grey border border-gray-800 hover:border-unik-gold/50 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 md:h-64 overflow-hidden bg-white p-4">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6 relative">
                                <h4 className="text-lg md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-unik-gold transition-colors">
                                    {product.name}
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                                        {product.specs.size}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center gap-1 md:gap-2 text-unik-red font-bold text-xs md:text-sm uppercase tracking-wider hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                                        >
                                            View <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
