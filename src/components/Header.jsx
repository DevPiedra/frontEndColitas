import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content navbar fixed-top navbar-dark navbar-trans">
                <div className="Header-logo">
                    <Link to="/">
                        <nav className="navbar-expand-lg">
                            <img src="../images/colita-th.png" alt="Logo"/>
                            <a className="navbar-brand" href="#">Refugio Colitas</a>
                        </nav>
                    </Link>
                </div>
                <div className="Header-nav">
                    <Nav />
                </div>
            </div>
        </div>
    </div>
);

export default Header;