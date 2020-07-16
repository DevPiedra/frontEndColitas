import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="Nav">
        <div className="navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li><Link to="/login">Iniciar Sesion</Link></li>
                    <li><Link to="/contact">Nosotros</Link></li>
                    <li><Link to="/adopt">Adoptar</Link></li>
                    <li><Link to="/help">Donar</Link></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Nav;