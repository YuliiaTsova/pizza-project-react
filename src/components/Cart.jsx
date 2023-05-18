import cart from '../assets/cart_black.svg';

import { ReactComponent as Bin } from '../assets/bin.svg';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CartCard } from './CartCard';
import { clearAll } from '../redux/slices/cartSlice';
import { ButtonBack } from './ButtonBack';

export const Cart = () => {
  const { items: cartItems, totalPrice, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClickClearAll = () => {
    dispatch(clearAll());
  };

  return (
    <section className="cart" aria-label="order cart">
      <div className="cart__top">
        <div className="cart__header">
          {/* <CartImg className="cart__top-img" /> */}
          <img src={cart} alt="cart pic" className="cart__top-img" />

          <h2 className="cart__title title">Your order</h2>
        </div>
        <div className="cart__reset" onClick={onClickClearAll}>
          {/* <img src={bin} alt="bin pic" className="cart__bin-img" /> */}
          <Bin alt="bin pic" className="cart__bin-img" />
          <p className="cart__reset-text">Clear all</p>
        </div>
      </div>
      <ul className="cart__order-list list-reset">
        {cartItems.map((el) => (
          <li key={el.id + el.size + el.type} className="cart__order-item">
            <CartCard {...el} />
          </li>
        ))}
      </ul>

      <div className="cart__total">
        <div className="cart__total-pizza">
          You ordered:
          <span>
            <b> {totalCount} pcs</b>
          </span>
        </div>
        <div className="cart__total-price">
          Total price:
          <span>
            <b> {totalPrice} $</b>
          </span>
        </div>
      </div>
      <div className="cart__bottom">
        {/* <Link to="/"> */}
        <div className="cart__btn">
          <ButtonBack> Go back</ButtonBack>
        </div>
        {/* </Link> */}
        <div className="cart__btn">
          <button className="btn btn--fill btn-reset">Check out</button>
        </div>
      </div>
    </section>
  );
};
