import { PizzaCard } from './PizzaCard';

export const ProductList = () => {
  return (
    <section className="products" aria-label="products">
      <h2 className="products__title title">all pizzas</h2>
      <div className="products__content">
        <ul className="products__list list-reset">
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
          <li className="products_item">
            <PizzaCard />{' '}
          </li>
        </ul>
      </div>
    </section>
  );
};
