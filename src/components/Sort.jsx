import arrow from '../assets/arrow.svg';

export const Sort = () => {
  return (
    <div className="sort" aria-label="sort by">
      <div className="sort__label">
        <img className="sort__label-img" src={arrow} alt="drop down arrow" />
        <p className="sort__title">
          <b>Sort by: </b>
        </p>
        <span className="sort__value">popular</span>
      </div>
      <div className="sort__drop">
        <ul className="sort__list list-reset">
          <li className="sort__item active">popular</li>
          <li className="sort__item ">price</li>
          <li className="sort__item">alphabet</li>
        </ul>
      </div>
    </div>
  );
};
