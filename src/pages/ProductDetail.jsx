import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MessageSquare, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const category = product ? categories.find(c => c.id === product.categoryId) : null;
    const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : '');

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product) {
            setSelectedImage(product.images[0]);
        }
    }, [id, product]);

    if (!product) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-unik-black text-white">
                <h2 className="text-3xl font-heading mb-4">Product Not Found</h2>
                <Link to="/" className="text-unik-red hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-unik-black min-h-screen">
            <div className="container mx-auto px-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-8 uppercase tracking-wider">
                    <Link to="/" className="hover:text-unik-gold transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-gray-500">{category?.name}</span>
                    <span>/</span>
                    <span className="text-white">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="aspect-square bg-white border border-gray-800 rounded-lg overflow-hidden relative group p-8">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Image Slider Controls */}
                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const currentIndex = product.images.indexOf(selectedImage);
                                            const prevIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
                                            setSelectedImage(product.images[prevIndex]);
                                        }}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-unik-red text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const currentIndex = product.images.indexOf(selectedImage);
                                            const nextIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
                                            setSelectedImage(product.images[nextIndex]);
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-unik-red text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {product.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-24 h-24 flex-shrink-0 border cursor-pointer transition-colors ${selectedImage === img ? 'border-unik-gold' : 'border-gray-700 hover:border-unik-gold'}`}
                                    >
                                        <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-unik-red/20 text-unik-red px-3 py-1 text-sm uppercase tracking-wider font-bold border border-unik-red/30">
                                {category?.name}
                            </span>
                            <span className="flex items-center gap-1 text-green-500 text-sm">
                                <CheckCircle size={16} /> In Stock
                            </span>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-unik-gold pl-6">
                            {product.description}
                        </p>

                        {/* Specifications Table */}
                        <div className="bg-unik-dark-grey border border-gray-800 p-6 mb-8 rounded-lg">
                            <h3 className="text-xl font-heading font-bold text-white mb-4 border-b border-gray-700 pb-2">
                                Technical Specifications
                            </h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="text-gray-500 uppercase tracking-wider">Size</div>
                                <div className="text-white font-medium">{product.specs.size}</div>

                                <div className="text-gray-500 uppercase tracking-wider">Quantity</div>
                                <div className="text-white font-medium">{product.specs.quantity}</div>

                                <div className="text-gray-500 uppercase tracking-wider">Material</div>
                                <div className="text-white font-medium">{product.specs.material}</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="flex-1 bg-unik-red text-white py-4 px-8 font-bold uppercase tracking-widest text-center hover:bg-white hover:text-unik-red transition-all duration-300 shadow-[0_0_20px_rgba(211,47,47,0.3)] flex items-center justify-center gap-2 rounded-lg"
                            >
                                <MessageSquare size={20} /> Enquire Now
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="flex-1 bg-transparent border border-gray-600 text-white py-4 px-8 font-bold uppercase tracking-widest text-center hover:border-unik-gold hover:text-unik-gold transition-all duration-300 flex items-center justify-center gap-2 rounded-lg"
                            >
                                <Phone size={20} /> Contact Dealer
                            </a>
                        </div>

                        {/* Video Section */}
                        {product.video && (
                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <h3 className="text-xl font-heading font-bold text-white mb-4">Product Video</h3>
                                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-gray-800">
                                    <video
                                        src={product.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
