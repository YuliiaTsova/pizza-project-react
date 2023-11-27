import './app.scss';
import { CartPage } from './pages/CartPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PizzaDetailBlock } from './components/PizzaDetailBlock';
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="pizza-project-react/" element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="cart" element={<CartPage />} />
        <Route path="pizza/:id" element={<PizzaDetailBlock />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
