import React from 'react';
import './Offer.css'
import OfferMobile from './OfferMobile/OfferMobile';

const Offer = () => {

    const offer = [
        {title:"3 средние пиццы от 999 рублей"},
        {title:"Кэшбек 10% на самовывоз (доставка)"},
        {title:"3 средние пиццы от 999 рублей"},
        {title:"Кэшбек 10% на самовывоз (доставка)"}
    ]

    return (
        <section className='offer'>
            <div className="container">
                <div className="offer__box">
                {offer.map((el, idx) => (
                        <div className={`offer__box__in${idx + 1}`}>

                          <p className={`offer__box__title${idx + 1}`}>{el.title}</p>
                          
                        </div>
                    ))}
                </div>

                <div className="offer__box__mobile">
                    <OfferMobile/>
                </div>
            </div>
        </section>
    );
};

export default Offer;