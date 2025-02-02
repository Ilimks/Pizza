import React from 'react';
import './Footer.css'
import footerLogo from './FooterIMG/FooterLogo.svg' 

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__box">

                    <div className="footer__left1">
                        <div className="footer__left1__name">
                            <img className='footer__left1__name__img' src={footerLogo} alt="" />
                            <p className='footer__left1__name__text'>Куда пицца</p>
                        </div>
                        <p className='footer__left1__bottom'>© Copyright 2021 — Куда Пицца</p>
                    </div>

                    <div className="footer__left2">
                        <h3 className='footer__left2__name'>Куда пицца</h3>
                        <ul className='footer__left2__nav'>
                            <li className='f__left2__nav__list'>О компании</li>
                            <li className='f__left2__nav__list'>Пользовательское соглашение</li>
                            <li className='f__left2__nav__list'>Условия гарантии</li>
                        </ul>
                    </div>

                    <div className="footer__center">
                        <h3 className='footer__center__name'>Помощь</h3>
                        <ul className='footer__center__nav'>
                            <li className='f__center__nav__list'>Ресторан</li>
                            <li className='f__center__nav__list'>Контакты</li>
                            <li className='f__center__nav__list'>Поддержка</li>
                            <li className='f__center__nav__list'>Отследить заказ</li>
                        </ul>
                    </div>

                    <div className="footer__right">
                        <h3 className='footer__right__name'>Контакты</h3>
                        <div className="footer__right__adress">
                            <p className='f__right__adress__list'>+7 (926) 223-10-11</p>
                            <p className='f__right__adress__list'>Москва, ул. Юных Ленинцев, д.99</p>
                        </div>
                        <div className="footer__right__net">
                            <p className='f__right__net'>Facebook</p>
                            <p className='f__right__net'>Instagram</p>
                        </div>
                    </div>
                </div>

                <div className="footer__box__mobile">

                    <div className="footer__mobile__name">
                        <img className='f__mobile__name__img' src={footerLogo} alt="" />
                        <p className='f__mobile__name__text'>Куда пицца</p>
                    </div>

                    <div className="footer__box__mobile__up1">
                        <h3 className='f__box__mobile__name'>Куда пицца</h3>
                        <ul className='f__box__mobile__nav'>
                            <li className='f__box__mobile__nav__list'>О компании</li>
                            <li className='f__box__mobile__nav__list'>Пользовательское соглашение</li>
                            <li className='f__box__mobile__nav__list'>Условия гарантии</li>
                        </ul>
                    </div>

                    <div className="footer__box__mobile__up2">
                        <h3 className='f__box__mobile__name'>Куда пицца</h3>
                        <ul className='f__box__mobile__nav'>
                            <li className='f__box__mobile__nav__list'>О компании</li>
                            <li className='f__box__mobile__nav__list'>Пользовательское соглашение</li>
                            <li className='f__box__mobile__nav__list'>Условия гарантии</li>
                        </ul>
                    </div>

                    <div className="footer__box__mobile__center">
                        <h3 className='f__box__mobile__name'>Помощь</h3>
                        <ul className='f__box__mobile__nav'>
                            <li className='f__box__mobile__nav__list'>Ресторан</li>
                            <li className='f__box__mobile__nav__list'>Контакты</li>
                            <li className='f__box__mobile__nav__list'>Поддержка</li>
                            <li className='f__box__mobile__nav__list'>Отследить заказ</li>
                        </ul>
                    </div>

                    <div className="footer__box__mobile__right">
                        <h3 className='f__box__mobile__name'>Контакты</h3>
                        <div className="f__box__mobile__adress">
                            <p className='f__box__mobile__adress__list'>+7 (926) 223-10-11</p>
                            <p className='f__box__mobile__adress__list'>Москва, ул. Юных Ленинцев, д.99</p>
                        </div>
                        <div className="f__box__mobile__net">
                            <p className='f__box__mobile__net__list'>Facebook</p>
                            <p className='f__box__mobile__net__list'>Instagram</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;