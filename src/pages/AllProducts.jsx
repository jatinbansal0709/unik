import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';

const AllProducts = () => {
    const navigate = useNavigate();

    // Filter products by category
    const getProductsByCategory = (catId) => {
        return products.filter(p => p.categoryId === catId);
    };

    return (
        <div className="bg-unik-black min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        ALL <span className="text-unik-red">PRODUCTS</span>
                    </h1>
                    <div className="w-24 h-1 bg-unik-red mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover our comprehensive range of premium repair solutions. From tube repairs to tubeless kits, every product is a testament to quality, innovation, and reliability.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {categories.map((cat, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={cat.id}
                            onClick={() => navigate(`/category/${cat.id}`)}
                            className="group relative bg-unik-dark-grey border border-gray-800 hover:border-unik-gold/50 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
                        >
                            <div className="h-48 overflow-hidden bg-gray-900 relative">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-unik-black to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-unik-gold transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3">
                                        {cat.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center text-unik-red font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                    View Products <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All Products List */}
                <div className="space-y-16">
                    {categories.map((cat) => {
                        const catProducts = getProductsByCategory(cat.id);
                        if (catProducts.length === 0) return null;

                        return (
                            <div key={cat.id} id={cat.id} className="scroll-mt-24">
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-unik-gold mb-8 border-l-4 border-unik-red pl-4">
                                    {cat.name}
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {catProducts.map((product) => (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            key={product.id}
                                            onClick={() => navigate(`/product/${product.id}`)}
                                            className="group bg-unik-dark-grey border border-gray-800 hover:border-unik-gold/30 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer"
                                        >
                                            <div className="h-40 bg-white p-4 overflow-hidden relative">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="text-white font-bold mb-1 group-hover:text-unik-gold transition-colors truncate">
                                                    {product.name}
                                                </h4>
                                                <p className="text-gray-500 text-xs mb-3 truncate">
                                                    {product.specs.size}
                                                </p>
                                                <div className="text-unik-red text-xs font-bold uppercase flex items-center">
                                                    View Details <ArrowRight size={12} className="ml-1" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
