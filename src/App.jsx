import './app.scss';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Main } from './components/Main';
import { PizzaCard } from './components/PizzaCard';
import { ProductList } from './components/ProductsList';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Main>
        {/* <main> */}
        {/* <div className="container"> */}
        {/* <section className="products" aria-label="products">
          <h2 className="products__title">all pizzas</h2>
          <div className="products__content">
            <ul className="products__list list-reset">
              <li className="products_item">
                <PizzaCard />
              </li>
              <li className="products_item">
                <PizzaCard />
              </li>
              <li className="products_item">
                <PizzaCard />
              </li>
              <li className="products_item">
                <PizzaCard />
              </li>
              <li className="products_item">
                <PizzaCard />
              </li>
              <li className="products_item">
                <PizzaCard />
              </li>
            </ul>
          </div>
        </section> */}
        <ProductList />
      </Main>
      {/* </div>
      </main> */}
    </div>
  );
}

export default App;
