import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import React from 'react';

export const Header = () => {
  const { totalCount, totalPrice, items } = useSelector((state) => state.cart);
  const { pathname } = useLocation();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Link to="/">
              <div className="header__logo">
                <img src={logo} alt="logo" className="header__logo-img" />
                <div className="header__desc">
                  <h1 className="header__title title">orange pizza</h1>
                  <p className="header__subtitle">the best pizza in the world</p>
                </div>
              </div>
            </Link>
            {pathname !== '/cart' && (
              <Link to="/cart">
                <div className="header__cart">
                  <button className="btn btn--cart btn-reset" aria-label="go to cart">
                    <span>{totalPrice} $</span>
                    <div className="btn__devider"></div>
                    <img src={cart} alt="cart img" />
                    <span>{totalCount}</span>
                  </button>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
