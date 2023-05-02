import { ReactComponent as Plus } from '../assets/plus.svg';
import pizza from '../assets/pizza1.png';
import ContentLoader from 'react-content-loader';

const Loader = ({ props }) => (
  <ContentLoader
    speed={2}
    width={340}
    height={450}
    viewBox="0 0 340 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%', height: '100%' }}
    {...props}
  >
    <rect x="7" y="260" rx="20" ry="20" width="333" height="123" />
    <rect x="7" y="400" rx="20" ry="20" width="128" height="40" />
    <rect x="155" y="400" rx="20" ry="20" width="176" height="40" />
    <circle cx="171" cy="107" r="104" />
    <rect x="80" y="224" rx="11" ry="11" width="185" height="21" />
  </ContentLoader>
);

export const PizzaCard = () => {
  return (
    <article className="item">
      <div className="item__img">
        <img src={pizza} alt="pizza" />
      </div>
      <h3 className="item__title">Meat</h3>
      <div className="item__details details">
        <ul className="details__list-types list-reset">
          <li className="details__item-types active">Classic</li>
          <li className="details__item-types ">Double</li>
        </ul>
        <ul className="details__list-sizes list-reset">
          <li className="details__item-sizes active">10 inch</li>
          <li className="details__item-sizes ">12 inch</li>
          <li className="details__item-sizes ">14 inch</li>
        </ul>
      </div>
      <div className="item__bottom">
        <span className="item__price"> from 15 $</span>
        <div className="item__btn-container">
          <button className="btn item__btn btn--outline btn-reset" aria-label="add pizza">
            <Plus className="btn__img" />
            {/* <img src={Plus} alt="plus" className="btn__img" /> */}
            <span className="btn__title">Add pizza</span>
            <span className="btn__quantity added">2</span>
          </button>
        </div>
      </div>
    </article>
    //  <Loader />
  );
};
