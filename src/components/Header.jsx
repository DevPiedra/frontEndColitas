import React from 'react';

const Header = () => (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content navbar fixed-top navbar-dark navbar-trans">
                <div className="Header-logo">
                    <nav className="navbar-expand-lg">
                        <img src="../images/colita-th.png" alt="Logo"/>
                        <a className="navbar-brand" href="#">Refugio Colitas</a>
                    </nav>
                </div>
                <div className="Header-nav">
                    <div className="navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><a className="nav-link" href="#">Iniciar Sesion</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Adoptar</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Donar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;