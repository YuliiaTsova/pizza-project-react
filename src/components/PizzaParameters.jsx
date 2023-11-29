import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const types = ['Classic', 'Cheese edges'];

export const PizzaParameters = (props) => {
  const [pizzaType, setPizzaType] = useState(props.types[0]);
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
  const pizzaPrice = Math.round((props.price * pizzaSize * pricePizzaType) / 10);
  return (
    <>
      {/* <div className="item__details details"> */}
      <div className="details">
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
        {/* <span className="item__price"> from {pizzaPrice} $</span> */}
        <span className="item__price"> {pizzaPrice} $</span>
        <div className="item__btn-container">
          <Button addedPizza={addedPizza} onClickAddPizza={onClickAddPizza} />
        </div>
      </div>
    </>
  );
};
