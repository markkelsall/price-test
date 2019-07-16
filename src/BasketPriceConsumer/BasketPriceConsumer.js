import React, { useContext } from 'react';
import BasketContext from '../BasketContext';
import TotalPrice from '../TotalPrice';

const BasketPriceConsumer = () => {
  const { carPrice, currencyDisplay, fees, extras } = useContext(BasketContext);
  return (<TotalPrice carPrice={carPrice} currencyDisplay={currencyDisplay} fees={fees} extras={extras} />);
};

export default BasketPriceConsumer;