import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';

const ProductShowcase = () => {
    const navigate = useNavigate();

    // Define the 4 specific categories to show
    // 1. Tyre Repair Patches -> nylon-tyre-patch
    // 2. Tube Repair Patches -> unik-punctures
    // 3. Tubeless Tyre Repair -> tubeless-kits
    // 4. Vulcanizing Fluid -> unik-cvf
    const featuredCategories = [
        {
            id: 'nylon-tyre-patch',
            title: 'Tyre Repair Patches',
            description: 'Experience superior durability with our range of Nylon and Radial patches, engineered to withstand high pressure and ensure long-lasting tyre integrity for all vehicle types.',
            image: '/images/tyre-repair-home.jpeg'
        },
        {
            id: 'unik-punctures',
            title: 'Tube Repair Patches',
            description: 'Our premium tube patches offer a seamless and permanent seal for punctures, ensuring safety and reliability for bicycles, motorcycles, and heavy-duty tubes.',
            image: '/images/tube-repair-home.jpeg'
        },
        {
            id: 'tubeless-kits',
            title: 'Tubeless Tyre Repair',
            description: 'Be road-ready with our comprehensive tubeless repair kits. Designed for quick, easy, and effective emergency repairs to get you back on track instantly.',
            image: '/images/tubeless-home.jpeg'
        },
        {
            id: 'unik-cvf',
            title: 'Vulcanizing Fluid',
            description: 'Professional-grade chemical vulcanizing fluid that creates a molecular bond between the patch and tyre, guaranteeing a repair as strong as the original rubber.',
            image: '/images/cvf-home.jpeg'
        }
    ];

    const handleCategoryClick = (catId) => {
        if (catId === 'nylon-tyre-patch') {
            navigate('/tyre-repair');
        } else {
            navigate(`/category/${catId}`);
        }
    };

    return (
        <section id="products" className="py-24 bg-unik-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Our Range
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        PRODUCT <span className="text-unik-red">CATEGORIES</span>
                    </h3>
                    <div className="w-24 h-1 bg-unik-red mx-auto mb-10"></div>
                </div>

                {/* Category Grid - 4 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {featuredCategories.map((cat, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className="group relative bg-unik-dark-grey border border-gray-800 hover:border-unik-gold/50 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden bg-gray-900">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-unik-dark-grey via-transparent to-transparent opacity-90"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col justify-between relative z-10 -mt-12">
                                <div>
                                    <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-unik-gold transition-colors">
                                        {cat.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                        {cat.description}
                                    </p>
                                </div>

                                <Link
                                    to={cat.id === 'nylon-tyre-patch' ? '/tyre-repair' : `/category/${cat.id}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-full py-3 bg-unik-red text-white font-bold uppercase tracking-wider text-xs rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    View Products <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button
                        onClick={() => navigate('/products')}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-unik-gold text-unik-gold font-bold uppercase tracking-wider hover:bg-unik-gold hover:text-black transition-all duration-300 rounded-lg"
                    >
                        View All Products
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
