import React from 'react';
import './Category.css'
import MainFire from './CategoryIMG/MainFire.svg'
import MainPizza from './CategoryIMG/MainPizza.svg'
import MainSushi from './CategoryIMG/MainSushi.svg'
import MainDrink from './CategoryIMG/MainDrink.svg'
import MainSnack from './CategoryIMG/MainSnacks.svg'
import MainCombo from './CategoryIMG/MainCombo.svg'
import MainDessert from './CategoryIMG/MainDessert.svg'
import MainSauce from './CategoryIMG/MainSauce.svg'
import CategorySwiperMobile from './CategorySwiperMobile/CategorySwiperMobile';

const Category = () => {

    const category = [
        {img: MainFire, title:"Акции"},
        {img: MainPizza, title:"Пицца"},
        {img: MainSushi, title:"Суши"},
        {img: MainDrink, title:"Напитки"},
        {img: MainSnack, title:"Закуски"},
        {img: MainCombo, title:"Комбо"},
        {img: MainDessert, title:"Десерты"},
        {img: MainSauce, title:"Соусы"}
    ]
    
    return (
        <section className='category'>
            <div className="container">
                <div className="category__box">
                    {category.map((el, idx) => (
                        <div key={idx} className="category__box__in">
                            
                          <img
                            src={el.img}
                            alt={`logo-${idx}`}
                            key={idx}
                            className="category__box__img"
                          />

                          <p key={idx} className='category__box__title'>{el.title}</p>
                          
                        </div>
                    ))}
                </div>

                <div className="category__box__mobile">
                    <CategorySwiperMobile/>
                </div>
            </div>
        </section>
    );
};

export default Category;