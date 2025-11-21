import { motion } from 'framer-motion';

const VideoSection = () => {

    return (
        <section className="py-20 bg-unik-dark-grey relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/3 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-unik-gold font-bold tracking-widest uppercase mb-2 text-sm">
                                See It In Action
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                                ENGINEERED FOR <span className="text-unik-red">PERFECTION</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Watch how UNIK tyre repair products deliver superior bonding strength and durability in the toughest conditions.
                            </p>
                        </motion.div>
                    </div>

                    {/* Video Container */}
                    <div className="md:w-2/3 w-full relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800 group"
                        >
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/images/patch-video.mp4"
                            >
                                Your browser does not support the video tag.
                            </video>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-unik-gold opacity-50 rounded-tr-3xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-unik-red opacity-50 rounded-bl-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default VideoSection;
