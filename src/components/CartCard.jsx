import React from 'react';
import { ReactComponent as Minus } from '../assets/minus.svg';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Cancel } from '../assets/cancel.svg';
import { useDispatch } from 'react-redux';
import { addItem, clearItem, minusItem } from '../redux/slices/cartSlice';

export const CartCard = ({ id, imageUrl, type, size, price, name, count }) => {
  const dispatch = useDispatch();

  const onClickClearItem = () => {
    dispatch(clearItem({ id, type, size }));
  };

  const onClickMinusItem = () => {
    dispatch(minusItem({ id, type, size }));
  };

  const onClickAddItem = () => {
    dispatch(addItem({ id, type, size }));
  };
  return (
    <article className="cart__order order" aria-label="order details">
      <div className="order__item">
        <div className="order__item-img">
          <img src={imageUrl} alt="pizza" className="order__img" />
        </div>
        <div className="order__details">
          <h3 className="order__title">{name}</h3>
          <p className="order__descr">
            {type}, {size} inch
          </p>
        </div>
      </div>
      <div className="order__quantity">
        <button
          className="order__quantity-controls btn-reset btn-small"
          onClick={onClickMinusItem}
        >
          <Minus alt="minus" className="btn-small__img" />
        </button>
        <span className="order__number">{count}</span>
        <button
          className="order__quantity-controls btn-small btn-reset"
          onClick={onClickAddItem}
        >
          <Plus alt="plus" className="btn-small__img" />
        </button>
      </div>
      <div className="order__price">{price} $</div>
      <button
        className="order__delete btn-small btn-small--grey btn-reset"
        onClick={onClickClearItem}
      >
        <Cancel alt="delete pizza" className="btn-small__img" />
      </button>
    </article>
  );
};
