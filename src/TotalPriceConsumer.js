import React from 'react';
import { PriceConsumer } from './PriceContext';
import TotalPrice from './TotalPrice';

const TotalPriceConsumer = () => {
  return (
    <PriceConsumer>
      {({ carPrice, currencyDisplay, fees, extras }) => (
        <TotalPrice carPrice={carPrice} currencyDisplay={currencyDisplay} fees={fees} extras={extras} />        
      )}
    </PriceConsumer>
  );
};

export default TotalPriceConsumer;