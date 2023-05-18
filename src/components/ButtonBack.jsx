import React from 'react';
import { ReactComponent as Arrow } from '../assets/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = ({ children }) => {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <button className="btn btn--outline btn--grey btn-reset" onClick={back}>
      <Arrow className="btn__img" />
      {children}
    </button>
  );
};
