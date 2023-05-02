import { useState } from 'react';
import arrow from '../assets/arrow.svg';

export const Sort = () => {
  const list = ['popular', 'price', 'alphabet'];

  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(0);

  const sortHandler = (i) => {
    setSelected(i);
    setIsOpen(false);
  };

  return (
    <div className="sort" aria-label="sort by">
      <div className="sort__label" onClick={() => setIsOpen((prev) => !prev)}>
        <img className="sort__label-img" src={arrow} alt="drop down arrow" />
        <p className="sort__title">
          <b>Sort by: </b>
        </p>
        <span className="sort__value">{list[selected]}</span>
      </div>
      {isOpen && (
        <div className="sort__drop">
          <ul className="sort__list list-reset">
            {list.map((el, i) => (
              <li
                key={el}
                className={`sort__item${selected === i ? ' sort__item active' : ''}`}
                onClick={() => sortHandler(i)}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
