import { Sort } from './Sort';
import { Navigation } from './Navigation';

export const Categories = () => {
  return (
    <section className="categories" aria-label="categories of pizzas">
      <div className="container">
        <div className="categories__content">
          <Navigation />
          <Sort />
        </div>
      </div>
    </section>
  );
};
