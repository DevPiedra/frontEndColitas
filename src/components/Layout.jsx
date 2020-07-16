import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = props => (
    <div className="Layout">
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;