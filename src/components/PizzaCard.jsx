// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from '../redux/slices/cartSlice';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import { PizzaParameters } from './PizzaParameters';

const types = ['Classic', 'Cheese edges'];

export const PizzaCard = (props) => {
  /* const [pizzaType, setPizzaType] = useState(props.types[0]);
  const [pizzaSize, setPizzaSize] = useState(props.sizes[0]);

  const pizzaCount = useSelector((state) => {
    return state.cart.items
      .filter((el) => el.id === props.id)
      .reduce((sum, el) => sum + el.count, 0);
  });

  const addedPizza = pizzaCount ? pizzaCount : 0;

  const dispatch = useDispatch();

  const onClickAddPizza = () => {
    const item = {
      id: props.id,
      imageUrl: props.imageUrl,
      type: types[pizzaType],
      size: pizzaSize,
      price: pizzaPrice,
      name: props.name,
    };

    dispatch(addItem(item));
  };

  const pricePizzaType = pizzaType === 0 ? 1 : 1.1;
  const pizzaPrice = Math.round((props.price * pizzaSize * pricePizzaType) / 10);*/

  return (
    <article className="item">
      <Link to={`/pizza/${props.id}`}>
        <div className="item__img">
          <img src={props.imageUrl} alt="pizza" />
        </div>
      </Link>
      <h3 className="item__title">{props.name}</h3>
      <PizzaParameters {...props} />
      {/* <div className="item__details details">
        <ul className="details__list-types list-reset">
          {props.types.map((type) => (
            <li
              className={`details__item-sizes ${type === pizzaType ? `active` : ''}`}
              key={type}
              onClick={() => {
                setPizzaType(type);
              }}
            >
              {types[type]}
            </li>
          ))}
        </ul>
        <ul className="details__list-sizes list-reset">
          {props.sizes.map((size) => (
            <li
              className={`details__item-sizes ${size === pizzaSize ? `active` : ''}`}
              key={size}
              onClick={() => setPizzaSize(size)}
            >
              {size} inch
            </li>
          ))}
        </ul>
      </div>
      <div className="item__bottom">
        <span className="item__price"> from {pizzaPrice} $</span>
        <div className="item__btn-container">
          <Button addedPizza={addedPizza} onClickAddPizza={onClickAddPizza} />
        </div>
      </div> */}
    </article>
  );
};
