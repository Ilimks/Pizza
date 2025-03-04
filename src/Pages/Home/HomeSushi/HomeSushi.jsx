import React from 'react';
import './HomeSushi.css'
import HomeSushiIMG1 from './HomeSushiIMG/HomeSushiIMG1.svg'

const HomeSushi = () => {

    const HomeSushiCart= [
        {img: HomeSushiIMG1, title: "Филадельфия кранч" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Филадельфия крем-брюле" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Супер Филадельфия" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Тигр мама" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Тигр мама" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Филадельфия крем-брюле" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Супер Филадельфия" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSushiIMG1, title: "Филадельфия кранч" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"}
    ]

    const CutText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    
    return (
        <section className='homeSushi'>
            <div className="container">
                <div className="homeSushi__box">
                    <h3 className='homeSushi__name'>Суши</h3>
                    <div className="homeSushi__box__carts">
                    {HomeSushiCart.slice(0,8).map((el,idx)=>(
                        <div key={idx} className="homeSushi__cart">
                            <img className='homeSushi__cart__img' src={el.img} alt="" />
                            <div className="homeSushi__content">
                                <div className="homeSushi__cart__text">
                                   <h4 className='homeSushi__cart__title'>{el.title}</h4>
                                   <p className='homeSushi__cart__des'>{CutText(el.description, 57)}</p>
                                </div>
                                <div className="homeSushi__cart__btnPrise">
                                    <button className='homeSushi__btn'>Выбрать</button>
                                    <p className='homeSushi__price'>{el.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSushi;




