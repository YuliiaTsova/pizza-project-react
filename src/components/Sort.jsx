import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../assets/arrow.svg';
import { setSortType } from '../redux/slices/filterSlice';

const list = [
  { name: 'Top rated', sortType: '-rating' },
  { name: 'Price: Low to High', sortType: 'price' },
  { name: 'Price: High to Low', sortType: '-price' },
  { name: 'Name A-Z', sortType: 'name' },
  { name: 'Name Z-A', sortType: '-name' },
];

export const Sort = () => {
  const sortType = useSelector((state) => state.filter.sortType);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef();

  const sortHandler = (el) => {
    dispatch(setSortType(el));
    setIsOpen(false);
  };

  //close pop up if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="sort" aria-label="sort by" ref={sortRef}>
      <div className="sort__label" onClick={() => setIsOpen((prev) => !prev)}>
        <img
          className={`sort__label-img ${isOpen ? 'active' : ''}`}
          src={arrow}
          alt="drop down arrow"
        />
        <p className="sort__title">
          <b>Sort by: </b>
        </p>
        <span className="sort__value">{sortType.name}</span>
      </div>
      {isOpen && (
        <div className="sort__drop">
          <ul className="sort__list list-reset">
            {list.map((el) => (
              <li
                key={el.name}
                className={`sort__item${
                  sortType.name === el.name ? ' sort__item active' : ''
                }`}
                onClick={() => sortHandler(el)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
