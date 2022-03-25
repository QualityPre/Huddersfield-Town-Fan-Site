import React from 'react';
import 'normalize.css';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}

            <Footer />
        </>
    );
}
