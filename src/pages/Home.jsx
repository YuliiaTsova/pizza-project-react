import React, { useEffect } from 'react';
import { Categories } from '../components/Categories';
import { ProductList } from '../components/ProductsList';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBlock } from '../components/ErrorBlock';

export const Home = () => {
  return (
    <>
      <Categories />
      <ErrorBoundary FallbackComponent={ErrorBlock}>
        <ProductList />
      </ErrorBoundary>
    </>
  );
};
