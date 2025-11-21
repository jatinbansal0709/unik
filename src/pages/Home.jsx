import React from 'react';
import Hero from '../components/Hero';
import SinglePouchSection from '../components/SinglePouchSection';
import VideoSection from '../components/VideoSection';
import ProductShowcase from '../components/ProductShowcase';
import OurPresence from '../components/OurPresence';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import ContactForm from '../components/ContactForm';
import ImageCarousel from '../components/ImageCarousel';
import ImageMarquee from '../components/ImageMarquee';

const Home = () => {
    return (
        <div className="bg-unik-black">
            <Hero />
            <SinglePouchSection />
            <ImageCarousel />
            <VideoSection />
            <ProductShowcase />
            <OurPresence />
            <ImageMarquee />
            <Features />
            <Reviews />
            <ContactForm />
        </div>
    );
};

export default Home;
