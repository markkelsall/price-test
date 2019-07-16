import React from 'react';
import { BasketConsumer } from './BasketContext';
import TotalPrice from './TotalPrice';

const TotalPriceConsumer = () => {
  return (
    <BasketConsumer>
      {({ carPrice, currencyDisplay, fees, extras }) => (
        <TotalPrice carPrice={carPrice} currencyDisplay={currencyDisplay} fees={fees} extras={extras} />        
      )}
    </BasketConsumer>
  );
};

export default TotalPriceConsumer;