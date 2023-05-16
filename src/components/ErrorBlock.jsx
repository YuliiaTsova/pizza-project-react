import React from 'react';

export const ErrorBlock = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ width: '300px', margin: '20px auto', padding: '50px 0' }}>
      Can't get pizzas from server
      {/* {error.message} */}
    </div>
  );
};
