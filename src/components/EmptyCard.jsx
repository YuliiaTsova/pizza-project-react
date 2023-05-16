import React from 'react';
import empty from '../assets/empty-card.png';
import { Link } from 'react-router-dom';
import { ButtonBack } from './ButtonBack';

export const EmptyCard = () => {
  return (
    <div className="empty-card">
      <h2 className="empty-card__title">Your card is empty</h2>
      <p className="empty-card__descr">It looks like you haven't chosen anything yet</p>
      <div className="empty-card__img">
        <img src={empty} alt="empty card" />
      </div>
      <div className="empty-card__btn">
        <Link to="/">
          <ButtonBack>Go back</ButtonBack>
        </Link>
      </div>
    </div>
  );
};
