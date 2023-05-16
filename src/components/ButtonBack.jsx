import React from 'react';
import { ReactComponent as Arrow } from '../assets/arrow-back.svg';

export const ButtonBack = ({ children }) => {
  return (
    <button className="btn btn--outline btn--grey btn-reset">
      <Arrow className="btn__img" />
      {children}
    </button>
  );
};
