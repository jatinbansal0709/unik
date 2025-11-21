import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    return (
        <section id="contact" className="py-24 bg-unik-dark-grey relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                        Get In Touch
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                        PARTNER WITH <span className="text-unik-red">US</span>
                    </h3>
                </div>

                <div className="max-w-6xl mx-auto bg-unik-black shadow-2xl border border-gray-800 relative overflow-hidden rounded-2xl">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-unik-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Column: Map */}
                        <div className="relative h-[400px] lg:h-auto min-h-[400px] border-b lg:border-b-0 lg:border-r border-gray-800">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.42303462607!2d75.8414119!3d30.225010700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391051d96c494723%3A0x336534068d274678!2sUNITECH%20RUBBER%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1763720865819!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 transition-all duration-500"
                                title="UNIK Location"
                            ></iframe>
                        </div>

                        {/* Right Column: Form */}
                        <div className="p-8 md:p-12 relative z-10">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-gray-400 text-sm uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-unik-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-unik-gold transition-colors rounded"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-gray-400 text-sm uppercase tracking-wider">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-unik-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-unik-gold transition-colors rounded"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-gray-400 text-sm uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-unik-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-unik-gold transition-colors resize-none rounded"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-unik-red text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-unik-red transition-colors duration-300 flex items-center justify-center gap-2 rounded"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
