import React from 'react';
import './HomeSnacks.css'
import HomeSnacksIMG1 from './HomeSnacksIMG/HomeSnacksIMG1.svg'

const HomeSnacks = () => {

    const HomeSnacksCart= [
        {img: HomeSnacksIMG1, title: "Филадельфия кранч" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Филадельфия крем-брюле" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Супер Филадельфия" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Тигр мама" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Тигр мама" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Филадельфия крем-брюле" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Супер Филадельфия" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"},
        {img: HomeSnacksIMG1, title: "Филадельфия кранч" , description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип dsvsvs", price: "475 ₽"}
    ]

    const CutText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    return (
        <section className='homeSnacks'>
            <div className="container">
                <div className="homeSnacks__box">
                        <h3 className='homeSnacks__name'>Закуски</h3>
                        <div className="homeSnacks__box__carts">
                        {HomeSnacksCart.slice(0,8).map((el,idx)=>(
                            <div key={idx} className="homeSnacks__cart">
                                <img className='homeSnacks__cart__img' src={el.img} alt="" />
                                <div className="homeSnacks__content">
                                    <div className="homeSnacks__cart__text">
                                       <h4 className='homeSnacks__cart__title'>{el.title}</h4>
                                       <p className='homeSnacks__cart__des'>{CutText(el.description, 57)}</p>
                                    </div>
                                    <div className="homeSnacks__cart__btnPrise">
                                        <button className='homeSnacks__btn'>Выбрать</button>
                                        <p className='homeSnacks__price'>{el.price}</p>
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

export default HomeSnacks;