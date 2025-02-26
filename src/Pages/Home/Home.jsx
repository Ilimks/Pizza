import React from 'react';
import './Home.css'
import Category from './Category/Category';
import Offer from './Offer/Offer';
import Adress from './Adress/Adress';
import HomePizza from './HomePizza/HomePizza';
import HomeSushi from './HomeSushi/HomeSushi';
import HomeSnacks from './HomeSnacks/HomeSnacks';
import HomeDesserts from './HomeDesserts/HomeDesserts';
import HomeText from './HomeText/HomeText';

const Home = () => {
    return (
        <main>
            <Category/>
            <Offer/>
            <Adress/>
            <HomePizza/>
            <HomeSushi/>
            <HomeSnacks/>
            <HomeDesserts/>
            <HomeText/>
        </main>
    );
};

export default Home;