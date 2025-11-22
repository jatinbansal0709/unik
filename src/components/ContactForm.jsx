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
                    <p className="text-gray-400 max-w-2xl mx-auto mt-6">
                        Join our growing network of satisfied partners. Whether you have a query or need support, our team is here to assist you 24/7.
                    </p>
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

                            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                                <p className="text-gray-400 mb-4 text-sm">Or connect with us directly on WhatsApp</p>
                                <a
                                    href="https://wa.me/919267000050"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-3 px-6 rounded uppercase tracking-wider hover:bg-[#20bd5a] transition-colors w-full"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
