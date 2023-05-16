import React from 'react';
import { Cart } from '../components/Cart';
import { useSelector } from 'react-redux';
import { EmptyCard } from '../components/EmptyCard';

export const CartPage = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  if (!totalPrice) {
    return <EmptyCard />;
  }
  return <Cart />;
};
