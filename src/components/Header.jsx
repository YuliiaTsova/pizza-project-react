import cart from '../assets/cart.svg';
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <img src={logo} alt="logo" className="header__logo-img" />
              <div className="header__desc">
                <h1 className="header__title title">react pizza</h1>
                <p className="header__subtitle">the best pizza in the world</p>
              </div>
            </div>
            <div className="header__cart">
              <button className="btn btn--cart btn-reset" aria-label="go to cart">
                <span>20 $</span>
                <div className="btn__devider"></div>
                <img src={cart} alt="cart img" />
                <span>3</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
