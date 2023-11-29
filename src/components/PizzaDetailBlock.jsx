import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ButtonBack } from './ButtonBack';
import { PizzaParameters } from './PizzaParameters';

export const PizzaDetailBlock = () => {
  const { id } = useParams();

  const [pizzaInfo, setPizzaInfo] = useState();

  useEffect(() => {
    const getPizzaById = async () => {
      try {
        const { data } = await axios.get(
          `https://64525b25a2860c9ed409bbf0.mockapi.io/pizzas/${id}`
        );
        setPizzaInfo(data);
      } catch (error) {
        console.log('ERROR', error);
      }
    };
    getPizzaById();
  }, []);

  if (!pizzaInfo) {
    return <div> Loading...</div>;
  }

  return (
    <section className="pizza-detail" aria-label="pizza detail">
      <div className="pizza-detail__img">
        <img src={pizzaInfo.imageUrl} alt="pizza picture" />
      </div>
      <div className="pizza-detail__info">
        <h2 className="pizza-detail__title">{pizzaInfo.name}</h2>
        <p className="pizza-detail__descr">
          <span>Description: </span> Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Facere, non?
        </p>
        <p className="pizza-detail__price">
          <span>Price from:</span> {pizzaInfo.price} $
        </p>
        <div className="pizza-detail__params">
          <PizzaParameters {...pizzaInfo} />
        </div>
        <div className="pizza-detail__btn">
          <ButtonBack>Go back</ButtonBack>
        </div>
      </div>
    </section>
  );
};
