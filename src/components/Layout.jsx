import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Reviews from './Reviews';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-unik-black text-white relative">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Reviews />
            <Footer />
        </div>
    );
};

export default Layout;
