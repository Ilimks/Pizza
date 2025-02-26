import React from 'react';
import './Pizza.css'
import chicken from './PizzaImg/chicken.svg'
import easy from './PizzaImg/easy.svg'
import hren from './PizzaImg/easy.svg'
import season from './PizzaImg/4seasons.svg'

const Pizza = () => {
    return (
        <section className='pizza'>
            <div className="container">
                <div className="pizza__content">
                    <h2 className='pizza__top'>Пицца</h2>
                    <div className="pizza__cards">
                        <div className="pizza__card">
                            <img src={chicken} alt="" />
                            <h4 className='pizza__title'>Куриный донар</h4>
                            <p className='pizza__info'>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={easy} alt="" />
                            <h4 className='pizza__title'>EASY PEASY огуречный расколбас</h4>
                            <p className='pizza__info'>Курица, Лук, Перец Халапеньо...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={hren} alt="" />
                            <h4 className='pizza__title'>EASY PEASY чикен а-ля хрен</h4>
                            <p className='pizza__info'>Курица, Лук, Соус Карбонара,сыр моцарел...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={season} alt="" />
                            <h4 className='pizza__title'>4 сезона</h4>
                            <p className='pizza__info'>Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={season} alt="" />
                            <h4 className='pizza__title'>4 сезона</h4>
                            <p className='pizza__info'>Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={hren} alt="" />
                            <h4 className='pizza__title'>EASY PEASY чикен а-ля хрен</h4>
                            <p className='pizza__info'>Курица, Лук, Соус Карбонара,сыр моцарел...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={easy} alt="" />
                            <h4 className='pizza__title'>EASY PEASY огуречный расколбас</h4>
                            <p className='pizza__info'>Курица, Лук, Перец Халапеньо...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                        <div className="pizza__card">
                            <img src={chicken} alt="" />
                            <h4 className='pizza__title'>Куриный донар</h4>
                            <p className='pizza__info'>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...</p>
                            <div className="pizza__bottom">
                                <button className="pizza__btn">Выбрать</button>
                                <p className="pizza__price">от 399 ₽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pizza;