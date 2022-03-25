import React from 'react';
import 'normalize.css';
import Footer from './Footer';
import Navbar from './Navbar';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <Navbar />
            {children}

            <Footer />
        </>
    );
}
