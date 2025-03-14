import React, { useEffect, useState } from 'react';
import './Home.css'
import Category from './Category/Category';
import Offer from './Offer/Offer';
import Adress from './Adress/Adress';
import HomePizza from './HomePizza/HomePizza';
import HomeSushi from './HomeSushi/HomeSushi';
import HomeSnacks from './HomeSnacks/HomeSnacks';
import HomeDesserts from './HomeDesserts/HomeDesserts';
import HomeText from './HomeText/HomeText';
import Drink from './Drink/Drink';

const Home = () => {

    const [isScrollUp, setIsScrollUp] = useState(false);

    useEffect(() => {
        const UpScroll = () => {
          if (window.scrollY > 300) {
            setIsScrollUp(true);
          } else {
            setIsScrollUp(false);
          }
        };
    
        window.addEventListener("scroll", UpScroll);
        return () => window.removeEventListener("scroll", UpScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: "smooth",});
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main>
            <Category/>
            <Offer/>
            <Adress/>
            <HomePizza/>
            <HomeSushi/>
            <HomeSnacks/>
            <HomeDesserts/>
            <Drink/>
            <HomeText/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Home;