import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OfferMobile = () => {
    return (
        <>
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              centeredSlides={false}
              grabCursor={true}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
             
             {[
                {title:"3 средние пиццы от 999 рублей"},
                {title:"Кэшбек 10% на самовывоз (доставка)"},
                {title:"3 средние пиццы от 999 рублей"},
                {title:"Кэшбек 10% на самовывоз (доставка)"}
              ].map((el, idx) => (
                <SwiperSlide key={idx}>
                  <div className={`offer__box__mobile__in${idx + 1}`}>
                    
                    <p className={`offer__box__mobile__title${idx + 1}`}>{el.title}</p>

                  </div>
                </SwiperSlide>
              ))}
           
            </Swiper>
        </>
    );
};

export default OfferMobile;