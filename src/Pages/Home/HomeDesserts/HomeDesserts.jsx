import React from 'react';
import './HomeDesserts.css'
import HomeDessertIMG1 from './HomeDessertsIMG/HomeDessertIMG1.svg'

const HomeDesserts = () => {

    const HomeDessertsCart= [
        {img: HomeDessertIMG1, title: "Филадельфия кранч" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Филадельфия крем-брюле" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Супер Филадельфия" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Тигр мама" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Тигр мама" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Филадельфия крем-брюле" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Супер Филадельфия" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeDessertIMG1, title: "Филадельфия кранч" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"}
    ]

    const CutText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    return (
        <section className='homeDesserts'>
            <div className="container">
                <div className="homeDesserts__box">
                    <h3 className='homeDesserts__name'>Десерты</h3>
                    <div className="homeDesserts__box__carts">
                    {HomeDessertsCart.slice(0,8).map((el,idx)=>(
                        <div key={idx} className="homeDesserts__cart">
                            <img className='homeDesserts__cart__img' src={el.img} alt="" />
                            <div className="homeDesserts__content">
                                <div className="homeDesserts__cart__text">
                                   <h4 className='homeDesserts__cart__title'>{el.title}</h4>
                                   <p className='homeDesserts__cart__des'>{CutText(el.description, 57)}</p>
                                </div>
                                <div className="homeDesserts__cart__btnPrise">
                                    <button className='homeDesserts__btn'>Выбрать</button>
                                    <p className='homeDesserts__price'>{el.price}</p>
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

export default HomeDesserts;