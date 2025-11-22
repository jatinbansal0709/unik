import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, Headphones } from 'lucide-react';

const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    const isNumeric = !isNaN(value) && !value.toString().includes('/');
    const numericValue = isNumeric ? parseFloat(value) : 0;

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isNumeric) {
            if (isInView) {
                spring.set(numericValue);
            } else {
                spring.set(0);
            }
        }
    }, [numericValue, spring, isNumeric, isInView]);

    if (!isNumeric) return <span ref={ref}>{value}</span>;

    return <motion.span ref={ref}>{display}</motion.span>;
};

const OurPresence = () => {
    const stats = [
        {
            id: 1,
            label: 'Year Established',
            value: '1990',
            icon: Calendar
        },
        {
            id: 2,
            label: 'Cities',
            value: '80',
            icon: MapPin,
            suffix: '+'
        },
        {
            id: 3,
            label: 'Employees',
            value: '500',
            icon: Users,
            suffix: '+'
        },
        {
            id: 4,
            label: 'Support',
            value: '24/7',
            icon: Headphones
        }
    ];

    return (
        <section className="py-20 bg-unik-black border-t border-gray-900 relative overflow-hidden">
            {/* Tyre Tread Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-tyre-tread pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Our Presence
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                        With a legacy spanning over three decades, we have established a strong footprint across India and beyond, serving thousands of satisfied customers.
                    </p>
                    <div className="w-24 h-1 bg-unik-red mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={stat.id}
                            className="bg-unik-dark-grey border border-gray-800 p-4 md:p-8 rounded-xl shadow-lg hover:border-unik-gold/30 transition-all duration-300 text-center group"
                        >
                            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full border-2 border-unik-red p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center group-hover:bg-unik-red/10 transition-colors">
                                    <stat.icon className="text-unik-gold group-hover:scale-110 transition-transform duration-300 w-8 h-8 md:w-10 md:h-10" />
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-unik-gold transition-colors flex justify-center items-center gap-1">
                                <Counter value={stat.value} />{stat.suffix}
                            </h3>
                            <p className="text-gray-400 uppercase tracking-wider text-xs md:text-sm font-medium group-hover:text-gray-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPresence;
