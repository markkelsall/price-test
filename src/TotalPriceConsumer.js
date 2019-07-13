import React from 'react';
import { PriceConsumer } from './PriceContext';

const TotalPrice = () => {
  return (
    <PriceConsumer>
      {({ car, setCar }) => (
        <div>
          <label htmlFor="username">Price: {car.name}</label>
          <input
            id="username"
            type="text"
            onChange={event => {
              setCar(event.target.value);
            }}
          />
        </div>
      )}
    </PriceConsumer>
  );
};

export default TotalPrice;