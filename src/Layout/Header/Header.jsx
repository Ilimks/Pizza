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
            setScrolled(window.scrollY > 30);
        }, 200);
        window.addEventListener('scroll', headScroll);
        return () => window.removeEventListener('scroll', headScroll);
    }, []);
    
    return (
        <header className='header'>
            <div className="header__container">
                
            </div>
        </header>
        
        // <header className="header">
        //     {!scrolled && (
        //     <motion.div className="header__box"
        //     initial={{ opacity: 1 }}
        //     animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
        //     transition={{ duration: 0.3 }}>
        //         <div className="container">
        //             <div className="header__box__up">
        //                 <div className="header__box__up__left">
        //                     <div className="header__box__up__left__moscow">
        //                         <img className='header__box__up__left__moscow__location' src={headerLocation} alt="Локация" />
        //                         <p className='header__box__up__left__moscow__text'>Москва</p>
        //                         <img className='header__box__up__left__moscow__arrow' src={headerArrowDown} alt="Стрелка вниз" />
        //                     </div>
        //                     <p className='header__box__up__left__adress'>Проверить адрес</p>
        //                     <p className='header__box__up__left__time'>Среднее время доставки*: <span>00:00:00</span></p>
        //                 </div>
        //                 <div className="header__box__up__right">
        //                     <p className='header__box__up__right__timeWork'>Время работы: с 11:00 до 23:00</p>
        //                     <div className="header__box__up__right__account">
        //                         <img className='header__box__up__right__account__icon' src={headerIconAccount} alt="Иконка аккаунт"/>
        //                         <p className='header__box__up__right__account__text'>Войти в аккаунт</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="header__container">
        //             <div className="header__box__center__line"></div>
        //         </div>
                
        //         <div className="container">
        //             <div className="header__box__bottom">

        //                 <div className="header__box__bottom__left">
        //                     <img className='header__box__bottom__left__pizza' src={headerPizza} alt="Иконка пицца" />
        //                     <p className='header__box__bottom__left__text'>Куда пицца</p>
        //                 </div>
                        
        //                 <div className="header__box__bottom__btn">
        //                     <img className='header__box__bottom__btn__bag' src={headerShopBag} alt="Корзина" />
        //                     <p className='header__box__bottom__btn__r'>0 ₽</p>
        //                 </div>

        //             </div>
        //         </div>
        //     </motion.div>
        //     )}

        //     {scrolled && (
        //         <div className="container">
        //             <motion.div className="header__scrolled"
        //             initial={{ y: -100, opacity: 0 }}
        //             animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
        //             transition={{ duration: 0.4 }}>
        //                 <div className="header__scrolled__left">
        //                     <div className="header__box__bottom__left">
        //                         <img className='header__box__bottom__left__pizza' src={headerPizza} alt="Иконка пицца" />
        //                         <p className='header__box__bottom__left__text'>Куда пицца</p>
        //                     </div>    
        //                     <nav className='header__box__nav'>
        //                         <ul className='header__box__nav__ul'>
        //                             <li className='header__box__nav__li'>Акции</li>
        //                             <li className='header__box__nav__li'>Пицца</li>
        //                             <li className='header__box__nav__li'>Суши</li>
        //                             <li className='header__box__nav__li'>Напитки</li>
        //                             <li className='header__box__nav__li'>Закуски</li>
        //                             <li className='header__box__nav__li'>Комбо</li>
        //                             <li className='header__box__nav__li'>Десерты</li>
        //                             <li className='header__box__nav__li'>Соусы</li>
        //                             <li className='header__box__nav__li'>Другое</li>
        //                         </ul>
        //                     </nav>   
        //                 </div> 
                    
        //                 <div className="header__box__bottom__btn">
        //                     <img className='header__box__bottom__btn__bag' src={headerShopBag} alt="Корзина" />
        //                     <p className='header__box__bottom__btn__r'>0 ₽</p>
        //                 </div>
        //             </motion.div>
        //         </div>
        //     )}
        // </header>
    );
};

export default Header;





                     