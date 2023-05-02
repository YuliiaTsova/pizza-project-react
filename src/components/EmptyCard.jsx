import React from 'react';
import empty from '../assets/empty-card.png';

export const EmptyCard = () => {
  return (
    <div className="empty-card">
      <h2 className="empty-card__title">Your card is empty</h2>
      <p className="empty-card__descr">It looks like you haven't ordered anything yet</p>
      <div className="empty-card__img">
        <img src={empty} alt="empty card" />
      </div>
      <div className="empty-card__btn">
        <button className="btn btn--outline btn--grey btn-reset">Go back</button>
      </div>
    </div>
  );
};
