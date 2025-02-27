import React, { useState } from 'react';
import './HomeText.css';

const HomeText = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleText = () => setIsExpanded(!isExpanded);

    return (
        <section className='homeText'>
            <div className="container">
                <div className="homeText__box">
                    <h4 className='homeText__name1'>Доставка пиццы в Москве</h4>
                    <div className={`homeText__content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        <p className="homeText__text1">
                            Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
                        </p>
                    
                        <h5 className='homeText__name2'>Как сделать заказ</h5>
                        <p className="homeText__text2">
                            Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
                        </p>
                    </div>
                    <h6 className='homeText__open' onClick={toggleText}>
                        {isExpanded ? 'Скрыть' : 'Показать полностью'}
                    </h6>
                </div>
            </div>
        </section>
    );
};

export default HomeText;
