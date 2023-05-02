import React from 'react';
import cart from '../assets/cart_black.svg';
import pizza from '../assets/pizza1.png';

import { ReactComponent as Bin } from '../assets/bin.svg';
import { ReactComponent as Minus } from '../assets/minus.svg';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Cancel } from '../assets/cancel.svg';
import { ReactComponent as Arrow } from '../assets/arrow-back.svg';

export const Cart = () => {
  return (
    <section className="cart" aria-label="order cart">
      <div className="cart__top">
        <div className="cart__header">
          {/* <CartImg className="cart__top-img" /> */}
          <img src={cart} alt="cart pic" className="cart__top-img" />

          <h2 className="cart__title title">Your order</h2>
        </div>
        <div className="cart__reset">
          {/* <img src={bin} alt="bin pic" className="cart__bin-img" /> */}
          <Bin alt="bin pic" className="cart__bin-img" />
          <p className="cart__reset-text">Clear all</p>
        </div>
      </div>
      <article className="cart__order order" aria-label="order details">
        <div className="order__item">
          <div className="order__item-img">
            <img src={pizza} alt="pizza" className="order__img" />
          </div>
          <div className="order__details">
            <h3 className="order__title">Name</h3>
            <p className="order__descr">double, 12 inch</p>
          </div>
        </div>
        <div className="order__quantity">
          <button className="order__quantity-controls btn-reset btn-small">
            {/* <img src={minus} alt="minus" className="btn-small__minus" /> */}
            <Minus alt="minus" className="btn-small__img" />
          </button>
          <span className="order__number">2</span>
          <button className="order__quantity-controls btn-small btn-reset">
            {/* <img src={plus} alt="plus" className="btn-small__plus" /> */}
            <Plus alt="plus" className="btn-small__img" />
          </button>
        </div>
        <div className="order__price">15 $</div>
        <button className="order__delete btn-small btn-small--grey btn-reset">
          {/* <img src={cancel} alt="delete pizza" className="order__delete-img" /> */}
          <Cancel alt="delete pizza" className="btn-small__img" />
        </button>
      </article>
      <article className="cart__order order" aria-label="order details">
        <div className="order__item">
          <div className="order__item-img">
            <img src={pizza} alt="pizza" className="order__img" />
          </div>
          <div className="order__details">
            <h3 className="order__title">Name</h3>
            <p className="order__descr">double, 12 inch</p>
          </div>
        </div>
        <div className="order__quantity">
          <button className="order__quantity-controls btn-reset btn-small">
            {/* <img src={minus} alt="minus" className="btn-small__minus" /> */}
            <Minus alt="minus" className="btn-small__img" />
          </button>
          <span className="order__number">2</span>
          <button className="order__quantity-controls btn-small btn-reset">
            {/* <img src={plus} alt="plus" className="btn-small__plus" /> */}
            <Plus alt="plus" className="btn-small__img" />
          </button>
        </div>
        <div className="order__price">15 $</div>
        <button className="order__delete btn-small btn-small--grey btn-reset">
          {/* <img src={cancel} alt="delete pizza" className="order__delete-img" /> */}
          <Cancel alt="delete pizza" className="btn-small__img" />
        </button>
      </article>
      <div className="cart__total">
        <div className="cart__total-pizza">
          You ordered:
          <span>
            <b> 3 pcs</b>
          </span>
        </div>
        <div className="cart__total-price">
          Total price:
          <span>
            <b> 50 $</b>
          </span>
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__btn">
          <button className="btn btn--outline btn--grey btn-reset">
            <Arrow className="btn__img" />
            Go back
          </button>
        </div>
        <div className="cart__btn">
          <button className="btn btn--fill btn-reset">Check out</button>
        </div>
      </div>
    </section>
  );
};
