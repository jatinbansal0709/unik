import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { products, categories } from '../data/products';

const CategoryPage = () => {
    const { id } = useParams();
    const category = categories.find(c => c.id === id);
    const categoryProducts = products.filter(p => p.categoryId === id);

    if (!category) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6 text-center min-h-screen bg-unik-black">
                <h1 className="text-4xl font-heading font-bold text-white mb-4">Category Not Found</h1>
                <Link to="/" className="text-unik-red hover:text-white transition-colors">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 min-h-screen bg-unik-black">
            <div className="container mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-unik-gold mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="text-center mb-16">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Category
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        {category.name}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
                    <div className="w-24 h-1 bg-unik-red mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {categoryProducts.map((product) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            key={product.id}
                            onClick={() => window.location.href = `/product/${product.id}`}
                            className="group relative bg-black border border-gray-800 hover:border-unik-gold/50 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-32 md:h-48 md:h-64 overflow-hidden bg-white p-4">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 inner-shadow rounded-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6 relative">
                                <h4 className="text-lg md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-unik-gold transition-colors">
                                    {product.name}
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                                        {product.specs.size}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="flex items-center gap-1 md:gap-2 text-unik-red font-bold text-xs md:text-sm uppercase tracking-wider hover:text-white transition-colors"
                                        >
                                            View <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
