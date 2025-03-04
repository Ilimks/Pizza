import React, { useEffect, useState } from 'react';
import './Home.css'
<<<<<<< HEAD
import Category from './Category/Category';
import Offer from './Offer/Offer';
import Adress from './Adress/Adress';
import HomePizza from './HomePizza/HomePizza';
import HomeSushi from './HomeSushi/HomeSushi';
import HomeSnacks from './HomeSnacks/HomeSnacks';
import HomeDesserts from './HomeDesserts/HomeDesserts';
import HomeText from './HomeText/HomeText';
import Up from '../../Layout/Header/HeaderIMG/CrossPopup.svg'
=======
import Sushi from './Sushi/Sushi';
import Drink from './Drink/Drink';
>>>>>>> 229bf3a (sushi commit)

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
<<<<<<< HEAD
            <Category/>
            <Offer/>
            <Adress/>
            <HomePizza/>
            <HomeSushi/>
            <HomeSnacks/>
            <HomeDesserts/>
            <HomeText/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
=======
            <Sushi/>
            <Drink/>
>>>>>>> 229bf3a (sushi commit)
        </main>
    );
};

export default Home;