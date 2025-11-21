import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    return (
        <section id="contact" className="py-24 bg-unik-dark-grey relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-unik-black p-8 md:p-12 shadow-2xl border border-gray-800 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-unik-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                            Get In Touch
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            PARTNER WITH <span className="text-unik-red">US</span>
                        </h3>
                    </div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-gray-400 text-sm uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-unik-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-unik-gold transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-gray-400 text-sm uppercase tracking-wider">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-unik-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-unik-gold transition-colors"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-gray-400 text-sm uppercase tracking-wider">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-unik-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-unik-gold transition-colors resize-none"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-unik-red text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-unik-red transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
