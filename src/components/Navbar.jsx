import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        if (!isHome) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', to: '/', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { name: 'Products', to: '/#products', action: () => scrollToSection('products') },
        { name: 'About', to: '/#features', action: () => scrollToSection('features') },
        { name: 'Contact', to: '/#contact', action: () => scrollToSection('contact') },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-unik-black/90 backdrop-blur-md py-4 shadow-lg border-b border-unik-grey' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/images/unik-logo.png" alt="UNIK Logo" className="h-12 w-auto" />
                    <span className="text-xl font-heading font-bold text-white tracking-wider">
                        TYRE & TUBE REPAIR
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        isHome && link.to.startsWith('/#') ? (
                            <button
                                key={link.name}
                                onClick={link.action}
                                className="text-gray-300 hover:text-unik-gold transition-colors font-medium uppercase text-sm tracking-wide"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-gray-300 hover:text-unik-gold transition-colors font-medium uppercase text-sm tracking-wide"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <a href="tel:+911234567890" className="bg-unik-red hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold uppercase text-sm tracking-wider transition-colors flex items-center gap-2">
                        <Phone size={16} />
                        <span>Call Now</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-unik-black border-t border-unik-grey overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                isHome && link.to.startsWith('/#') ? (
                                    <button
                                        key={link.name}
                                        onClick={link.action}
                                        className="text-left text-gray-300 hover:text-unik-gold text-lg font-medium uppercase"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="text-left text-gray-300 hover:text-unik-gold text-lg font-medium uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
