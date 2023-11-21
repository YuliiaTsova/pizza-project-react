import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/slices/filterSlice';
import axios from 'axios';

export const Pagination = ({ length }) => {
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  //mockAPI doesn't return amount of available pages

  useEffect(() => {
    const pizzas = async () => {
      try {
        const res = await axios.get('https://64525b25a2860c9ed409bbf0.mockapi.io/pizzas');
        setCount(res.data.length);
      } catch (err) {
        console.log('err', err);
      }
    };
    pizzas();
  }, []);

  if (length < 4 && currentPage === 1) {
    return null;
  }
  return (
    <div className="pagination" aria-label="pagination">
      <ul className="pagination__list list-reset">
        {[...new Array(Math.round(count / 8))].map((el, i) => (
          <li
            key={i}
            className={`pagination__item ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => dispatch(setPage(i + 1))}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};
