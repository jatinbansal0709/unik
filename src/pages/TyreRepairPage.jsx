import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TyreRepairPage = () => {
    const navigate = useNavigate();

    const options = [
        {
            id: 'nylon-tyre-patch',
            title: 'Nylon Tyre Patches',
            description: 'Reinforced nylon patches designed for heavy-duty durability and superior strength.',
            image: '/images/tyre-repair-home.jpeg'
        },
        {
            id: 'radial-tyre-patch',
            title: 'Radial Tyre Patches',
            description: 'Specialized patches for radial tyres ensuring flexibility and perfect bonding.',
            image: '/images/radial-home.jpeg'
        }
    ];

    return (
        <div className="bg-unik-black min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        TYRE REPAIR <span className="text-unik-red">SOLUTIONS</span>
                    </h1>
                    <div className="w-24 h-1 bg-unik-red mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience the pinnacle of tyre repair with our advanced solutions. Crafted using German technology and genuine ply, our patches guarantee safety and longevity for every journey.
                    </p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {options.map((option, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={option.id}
                            onClick={() => navigate(`/category/${option.id}`)}
                            className="group relative bg-black border border-gray-800 hover:border-unik-gold/50 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer h-[400px] flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-40 md:h-64 overflow-hidden bg-black">
                                <img
                                    src={option.image}
                                    alt={option.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 inner-shadow rounded-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col justify-between border-t border-gray-800">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-unik-gold transition-colors">
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        {option.description}
                                    </p>
                                </div>

                                <button className="w-full py-4 bg-unik-red text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                                    View Products <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TyreRepairPage;
