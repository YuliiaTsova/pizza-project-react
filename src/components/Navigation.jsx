import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const categories = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Sweet'];

export const Navigation = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <ul className="nav__list list-reset">
        {categories.map((cat, i) => (
          <li
            key={cat}
            className={`nav__item ${categoryId === i ? 'active' : ''}`}
            onClick={() => dispatch(setCategoryId(i))}
          >
            {' '}
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
};
