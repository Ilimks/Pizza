import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MainFire from '../CategoryIMG/MainFire.svg'
import MainPizza from '../CategoryIMG/MainPizza.svg'
import MainSushi from '../CategoryIMG/MainSushi.svg'
import MainDrink from '../CategoryIMG/MainDrink.svg'
import MainSnack from '../CategoryIMG/MainSnacks.svg'
import MainCombo from '../CategoryIMG/MainCombo.svg'
import MainDessert from '../CategoryIMG/MainDessert.svg'
import MainSauce from '../CategoryIMG/MainSauce.svg'

const CategorySwiperMobile = () => {

    

    return (
        <>
            <Swiper
              slidesPerView={3.5}
              centeredSlides={false}
              grabCursor={true}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
             
             {[
                {img: MainFire, title: 'Акции' },
                {img: MainPizza, title: 'Пицца' },
                {img: MainSushi, title:"Суши"},
                {img: MainDrink, title:"Напитки"},
                {img: MainSnack, title:"Закуски"},
                {img: MainCombo, title:"Комбо"},
                {img: MainDessert, title:"Десерты"},
                {img: MainSauce, title:"Соусы"}
              ].map(({ img, title }, idx) => (
                <SwiperSlide key={idx}>
                  <div className={`category__box__in__mobile${idx + 1}`}>
                    <img src={img} className={`category__box__img__mobile${idx + 1}`} />
                    <p className={`category__box__title__mobile${idx + 1}`}>{title}</p>
                  </div>
                </SwiperSlide>
              ))}
           
            </Swiper>
        </>
    );
};

export default CategorySwiperMobile;