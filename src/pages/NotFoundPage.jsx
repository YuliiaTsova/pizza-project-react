import React from 'react';
import not_found from '../assets/not_found.png';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <img src={not_found} alt="Page not found" className="not-found__img" />
      <h1 className="not-found__title">Page not found </h1>
    </div>
  );
};
