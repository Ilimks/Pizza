import React from 'react';
import './HomePizza.css'
import HomePizza1 from './HomePizzaIMG/HomePizza1.svg'

const HomePizza = () => {

    const HomePizzaCart= [
        {img: HomePizza1, title: "Чикен Сладкий Чили" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "EASY PEASY огуречный расколбас" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "EASY PEASY чикен а-ля хрен" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "4 сезона" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "Чикен Сладкий Чили" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "Чикен Сладкий Чили" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "Чикен Сладкий Чили" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"},
        {img: HomePizza1, title: "Чикен Сладкий Чили" , description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус ифыфсфы", price: "549 ₽"}
    ]

    const CutText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    return (
        <section className='homePizza'>
            <div className="container">
                <div className="homePizza__box">
                    <h3 className='homePizza__name'>Пицца</h3>
                    <div className="homePizza__box__carts">
                    {HomePizzaCart.slice(0,8).map((el,idx)=>(
                        <div key={idx} className="homePizza__cart">
                            <img className='homePizza__cart__img' src={el.img} alt="" />
                            <div className="homePizza__content">
                                <div className="homePizza__cart__text">
                                   <h4 className='homePizza__cart__title'>{el.title}</h4>
                                   <p className='homePizza__cart__des'>{CutText(el.description, 57)}</p>
                                </div>
                                <div className="homePizza__cart__btnPrise">
                                    <button className='homePizza__btn'>Выбрать</button>
                                    <p className='homePizza__price'>от {el.price}</p>
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

export default HomePizza;