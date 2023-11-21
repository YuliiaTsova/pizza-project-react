import React, { useEffect } from 'react';
import { PizzaCard } from './PizzaCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { Loader } from './Skeleton';

import { Pagination } from '../components/Pagination';

export const ProductList = () => {
  const { items, status } = useSelector((state) => state.pizza);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const { sortType } = useSelector((state) => state.filter.sortType);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas({ categoryId, sortType, currentPage }));
  }, [categoryId, sortType, currentPage]);

  if (status !== 'loading' && status !== 'success') {
    throw new Error(status);
  }

  useEffect(() => {
    window.scrollTo(0, 200);
  }, [currentPage]);

  return (
    <>
      <section className="products" aria-label="products">
        <div className="products__content">
          <ul className="products__list list-reset">
            {status === 'loading'
              ? [...new Array(8)].map((el, i) => (
                  <li className="products_item" key={i}>
                    <Loader />
                  </li>
                ))
              : items.map((el) => (
                  <li key={el.name} className="products_item">
                    <PizzaCard {...el} />
                  </li>
                ))}
          </ul>
        </div>
      </section>

      <Pagination length={items.length} currentPage={currentPage} />
    </>
  );
};
