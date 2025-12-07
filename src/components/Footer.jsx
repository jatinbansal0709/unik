import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-unik-dark-grey text-white pt-16 pb-8 border-t border-unik-grey relative overflow-hidden">
            {/* Tyre Tread Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-tyre-tread pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <img src="/images/unik-logo.png" alt="UNIK Logo" className="h-16 w-auto" />
                            <span className="text-2xl font-heading font-bold text-white tracking-wider">
                                TYRE & TUBE REPAIR
                            </span>
                        </div>
                        <p className="text-gray-400 mb-2 font-bold text-unik-gold">
                            UNITECH RUBBER INDUSTRIES
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Premium tyre repair solutions engineered for durability and safety.
                            Proudly made in India, trusted globally.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-unik-grey flex items-center justify-center rounded-full text-unik-gold hover:bg-unik-red hover:text-white transition-colors cursor-pointer">
                                <Facebook size={20} />
                            </div>
                            <div className="w-12 h-12 bg-unik-grey flex items-center justify-center rounded-full text-unik-gold hover:bg-unik-red hover:text-white transition-colors cursor-pointer">
                                <Instagram size={20} />
                            </div>
                            <div className="w-12 h-12 bg-unik-grey flex items-center justify-center rounded-full text-unik-gold hover:bg-unik-red hover:text-white transition-colors cursor-pointer">
                                <Linkedin size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6 text-unik-gold">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                            <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
                            <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6 text-unik-gold">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-unik-red mt-1 shrink-0" size={20} />
                                <span className="hover:text-white transition-colors cursor-pointer">C-27, Industrial Focal Point,<br />Sangrur, India, 148001</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-unik-red shrink-0" size={20} />
                                <span className="hover:text-white transition-colors cursor-pointer">+91 92670 00050</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-unik-red shrink-0" size={20} />
                                <span className="hover:text-white transition-colors cursor-pointer">okayinternational@yahoo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-unik-grey pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} UNITECH RUBBER INDUSTRIES. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm">Proudly Made in India</span>
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="w-6 h-4 object-cover border border-gray-700" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
