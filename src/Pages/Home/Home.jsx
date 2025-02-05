import React from 'react';
import './Home.css'
import Category from './Category/Category';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <main>
            <Category/>
            <Offer/>
        </main>
    );
};

export default Home;