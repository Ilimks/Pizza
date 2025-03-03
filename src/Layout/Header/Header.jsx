import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import throttle from "lodash/throttle";
import './Header.css'
import headerLocation from './HeaderIMG/HeaderLocation.svg'
import headerIconAccount from './HeaderIMG/HeaderIconAccount.svg'
import headerPizza from './HeaderIMG/HeaderPizza.svg'
import CrossPopup from './HeaderIMG/CrossPopup.svg'
import PizzaBasket from './HeaderIMG/PizzaBasket.svg'
import Minus from './HeaderIMG/minus.svg'
import Plus from './HeaderIMG/Plus.svg'


const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [other, setOther] = useState(false)
    const [city, setCity] = useState(false)
    const [cityName, setCityName] = useState("Москва");
    const [OpenBasket, setOpenBasket] = useState(false);
    const [OpenAccount, setOpenAccount] = useState(false);
    const [changeLog, setChangeLog] = useState(true);


    useEffect(() => {
        if (OpenBasket || OpenAccount) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    }, [OpenBasket,OpenAccount]);

    const handleCitySelect = (selectedCity) => {
        setCityName(selectedCity);
        setCity(false);
    };


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
                                <p onClick={() => setCity(!city)} className={`header__top__left__city__text city ${city ? "open" : ""}`}>{cityName}</p>
                                {city && (
                                    <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="city__box"
                                    >
                                        <ul className='city__list'>
                                            {["Москва", "Томск", "Казань"].map((cityName) => (
                                                <li key={cityName} className="city__list__li" onClick={() => handleCitySelect(cityName)}>{cityName}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                            <p className='header__top__left__adress'>Проверить адрес</p>
                            <p className='header__top__left__time'>Среднее время доставки*: <span>00:00:00</span></p>
                            <p className='header__top__left__time__mobile'>00:00:00</p>
                        </div>
                        <div className="header__top__right">
                            <p className='header__top__right__timeWork'>Время работы: с 11:00 до 23:00</p>
                            <div className="header__top__right__account">
                                <img onClick={() => setOpenAccount(true)} className='header__top__right__account__img' src={headerIconAccount} alt="account" />
                                <p onClick={() => setOpenAccount(true)} className='header__top__right__account__text'>Войти в аккаунт</p>
                                <AnimatePresence>
                                {OpenAccount && (
                                    <>
                                        <motion.div
                                        className="header__top__right__account__open"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setOpenAccount(false)}
                                        />

                                        <motion.div
                                        className="header__top__right__account__popup"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                                        >  
                                        {changeLog ? (
                                            <div className="h__t__right__account__popup__content">
                                                <h3 className='h__t__right__account__popup__content__name'>Вход в аккаунт</h3>
                                                <p className='h__t__right__account__popup__content__text'>Сможете быстро оформлять заказы, использовать бонусы</p>
                                                <form className='h__t__right__account__popup__content__form' action="">
                                                    <label htmlFor="">
                                                        <input className='h__t__right__account__popup__content__login' type="text" name="" id="" placeholder='Login'/>
                                                    </label>
                                                    <label htmlFor="">
                                                        <input className='h__t__right__account__popup__content__password' type="password" name="" id="" placeholder='Password'/>
                                                    </label>
                                                    <button className='h__t__right__account__popup__content__btn'>Войти</button>
                                                </form>
                                                <p className='h__t__right__account__popup__content__text2'>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
                                                <p className='h__t__right__account__popup__content__text__reg'>Нужен аккаунт? <span onClick={() => setChangeLog(!changeLog)}>Зарегистрироваться</span></p>
                                            </div>
                                        ) : (
                                            <div className="h__t__right__account__popup__content__reg">
                                                <h3 className='h__t__right__account__popup__content__reg__name'>Зарегистрировать аккаунт</h3>
                                                <div className="h__t__right__account__popup__content__reg__btext">
                                                    <p className='h__t__right__account__popup__content__reg__text'>Сможете быстро оформлять заказы, использовать бонусы</p>
                                                </div>
                                                <form className='h__t__right__account__popup__content__reg__form' action="">
                                                    <label htmlFor="">
                                                        <input className='h__t__right__account__popup__content__reg__login' type="text" name="" id="" placeholder='Login'/>
                                                    </label>
                                                    <label htmlFor="">
                                                        <input className='h__t__right__account__popup__content__reg__email' type="email" name="" id="" placeholder='Email'/>
                                                    </label>
                                                    <label htmlFor="">
                                                        <input className='h__t__right__account__popup__content__reg__password' type="password" name="" id="" placeholder='Password'/>
                                                    </label>
                                                    <label htmlFor="">
                                                        <input className='h__t__right__account__popup__content__reg__address' type="text" name="" id="" placeholder='Address'/>
                                                    </label>
                                                    <button className='h__t__right__account__popup__content__reg__btn'>Регистрация</button>
                                                </form>
                                                <div className="h__t__right__account__popup__content__reg__text2b">
                                                    <p className='h__t__right__account__popup__content__reg__text2'>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
                                                </div>
                                                <p className='h__t__right__account__popup__content__reg__text__reg'>У вас уже есть аккаунт? <span onClick={() => setChangeLog(!changeLog)}>Авторизоваться</span></p>
                                            </div>
                                        )}
                                        </motion.div>
                                    </>
                                )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
    
                    <div className="header__line"></div>
    
                    <div className="header__bottom">
                        <div className="header__bottom__pizza">
                            <img className='header__bottom__pizza__img' src={headerPizza} alt="pizza" />
                            <p className='header__bottom__pizza__text'>Куда пицца</p>
                        </div>
                        <button onClick={() => setOpenBasket(true)} className='header__bottom__btn'>0 ₽</button>
                        <AnimatePresence>
                        {OpenBasket && (
                            <>
                                <motion.div
                                className="header__bottom__btn__open"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setOpenBasket(false)}
                                />

                                <motion.div
                                className="header__bottom__btn__popup"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                                >
                                
                                <div className="header__bottom__btn__content">
                                    <div className="header__bottom__btn__up">
                                        <h3 className='header__bottom__btn__name'>Ваш заказ</h3>
                                        <div className="header__bottom__btn__close" onClick={() => setOpenBasket(false)}>
                                            <img className='header__bottom__btn__close__img' src={CrossPopup} alt="" />
                                        </div>
                                    </div>
                                    <div className="header__bottom__btn__products">
                                        <div className="header__bottom__btn__product">
                                            <img className='header__bottom__btn__product__img' src={PizzaBasket} alt="" />
                                            <div className="header__bottom__btn__product__right">
                                                <h5 className='h__b__btn__product__right__name'>Чикен Сладкий Чили</h5>
                                                <p className='h__b__btn__product__right__text'>Традиционное тесто, 23 см</p>
                                                <div className="h__b__btn__product__right__countPrice">
                                                    <div className="h__b__btn__product__right__count">
                                                        <img className='h__b__btn__p__right__count__minus' src={Minus} alt="" />
                                                        <p className='h__b__btn__p__right__count__num'>1</p>
                                                        <img className='h__b__btn__p__right__count__plus' src={Plus} alt="" />
                                                    </div>
                                                    <p className='h__b__btn__product__right__price'>499 ₽</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="header__bottom__btn__content__bottom">
                                    <div className="h__b__btn__content__bottom__line"></div>
                                    <div className="h__b__btn__content__bottom__done">
                                        <h5 className='h__b__btn__content__bottom__done__all'>Итого: 2 379 ₽</h5>
                                        <button className='h__b__btn__content__bottom__done__btn'>Оформить заказ</button>
                                    </div>
                                </div>
                                </motion.div>
                            </>
                        )}
                        </AnimatePresence>
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
                                    <li onClick={() => setOther(!other)} className={`h__nav__menu__item other ${other ? "open" : ""}`}>Другое</li>
                                    {other && (
                                        <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="other__box"
                                        >
                                        <ul className='other__list'>
                                            <li className='other__list__li'>Акции</li>
                                            <li className='other__list__li'>О компании</li>
                                            <li className='other__list__li'>Пользовательское соглашение</li>
                                            <li className='other__list__li'>Условия гарантии</li>
                                            <li className='other__list__li'>Ресторан</li>
                                            <li className='other__list__li'>Контакты</li>
                                            <li className='other__list__li'>Поддержка</li>
                                            <li className='other__list__li'>Отследить заказ</li>
                                        </ul>
                                        </motion.div>
                                    )}
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





                     