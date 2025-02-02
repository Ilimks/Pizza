import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import throttle from "lodash/throttle";
import './Header.css'
import headerLocation from './HeaderIMG/HeaderLocation.svg'
import headerArrowDown from './HeaderIMG/HeaderArrowDown.svg'
import headerIconAccount from './HeaderIMG/HeaderIconAccount.svg'
import headerPizza from './HeaderIMG/HeaderPizza.svg'
import headerShopBag from './HeaderIMG/HeaderShopBag.svg'


const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const headScroll = throttle(() => {
            setScrolled(window.scrollY > 90);
        }, 200);
        window.addEventListener('scroll', headScroll);
        return () => window.removeEventListener('scroll', headScroll);
    }, []);
    
    return (
        <header className='header'>
            <div className="header__container">
                <motion.div
                className='header__noScrolled'
                initial={{ opacity: 1 }}
                animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
                transition={{ duration: 0.3 }}>
                    <div className="header__top">
                        <div className="header__top__left">
                            <div className="header__top__left__city">
                                <img className='header__top__left__city__img' src={headerLocation} alt="city" />
                                <p className='header__top__left__city__text'>Москва</p>
                            </div>
                            <p className='header__top__left__adress'>Проверить адрес</p>
                            <p className='header__top__left__time'>Среднее время доставки*: <span>00:00:00</span></p>
                            <p className='header__top__left__time__mobile'>00:00:00</p>
                        </div>
                        <div className="header__top__right">
                            <p className='header__top__right__timeWork'>Время работы: с 11:00 до 23:00</p>
                            <div className="header__top__right__account">
                                <img className='header__top__right__account__img' src={headerIconAccount} alt="account" />
                                <p className='header__top__right__account__text'>Войти в аккаунт</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="header__line"></div>
    
                    <div className="header__bottom">
                        <div className="header__bottom__pizza">
                            <img className='header__bottom__pizza__img' src={headerPizza} alt="pizza" />
                            <p className='header__bottom__pizza__text'>Куда пицца</p>
                        </div>
                        <button className='header__bottom__btn'>0 ₽</button>
                        <label className='burger-3'>
                            <input type="checkbox"/>
                            <svg viewBox="0 0 32 32">
                              <path
                                className="line line-top-bottom"
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                              ></path>
                              <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </motion.div>

                {scrolled && (
                <motion.div 
                className="header__scrolled"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}>
                    <div className="header__bottom__scrolled">

                        <div className="header__bottom__scrolled__left">
                            <div className="header__bottom__scrolled__left__pizza">
                                <img className='header__bottom__scrolled__left__pizza__img' src={headerPizza} alt="pizza" />
                                <p className='header__bottom__scrolled__left__pizza__text'>Куда пицца</p>
                            </div>
                            <nav className='header__nav'>
                                <ul className='header__nav__menu'>
                                    <li className='h__nav__menu__item'>Акции</li>
                                    <li className='h__nav__menu__item'>Пицца</li>
                                    <li className='h__nav__menu__item'>Суши</li>
                                    <li className='h__nav__menu__item'>Напитки</li>
                                    <li className='h__nav__menu__item'>Закуски</li>
                                    <li className='h__nav__menu__item'>Комбо</li>
                                    <li className='h__nav__menu__item'>Десерты</li>
                                    <li className='h__nav__menu__item'>Соусы</li>
                                    <li className='h__nav__menu__item'>Другое</li>
                                </ul>
                            </nav>
                        </div>

                        <button className='header__bottom__scrolled__left__btn'>0 ₽</button>

                    </div>
                </motion.div>
                )}

            </div>
        </header>
        
    );
};

export default Header;





                     