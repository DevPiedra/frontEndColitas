import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';

const Layout = props => (
    <div className="Layout">
        <Header />
        <Home />
        <Footer />
    </div>
);

export default Layout;