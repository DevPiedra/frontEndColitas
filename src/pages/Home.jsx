import React from 'react';
import Carrousel from '../components/Carrousel';
import PetsList from '../components/PetsList';

const Home = () => (
    <div className="Home">
        <div className="Home-container">
            <div className="Home-items">

            <Carrousel />
            <PetsList />
            </div>
        </div>
    </div>
);

export default Home;