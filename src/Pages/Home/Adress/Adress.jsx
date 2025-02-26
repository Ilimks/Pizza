import React from 'react';
import './Adress.css'

const Adress = () => {
    return (
        <section className='adress'>
            <div className="container">
                <div className="adress__box">
                    <p className='adress__text'>Проверить адрес доставки</p>
                    <form className='adress__form' action="">
                        <label htmlFor="">
                          <input className='adress__input' type="text" placeholder='Адрес'/>
                       </label>
                       <button className='adress__btn'>Проверить</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Adress;