import React, { createContext, useState } from 'react';

const BasketContext = createContext();
const BasketConsumer = BasketContext.Consumer;

const BasketProvider = props => {

  const addExtra = (id, amount, payNow) => {
    const { extras } = basket;
    let updatedQuantity = false;
    extras.forEach(extra => {
      if (extra.id === id) {
        updatedQuantity = true;
        extra.quantity++;
      }
    });
    if (!updatedQuantity) {
      extras.push({
        id,
        amount,
        quantity: 1,
        payNow
      });
    }

    setBasket({ 
      ...basket,
      extras
    });
  }

  const initialState = {
    extras: [],
    carPrice: props.carPrice,
    currencyDisplay: props.currencyDisplay,
    fees: props.fees,
    addExtra,
  };

  const [basket, setBasket] = useState(initialState);

  return (
    <BasketContext.Provider value={basket}>
      {props.children}
    </BasketContext.Provider>
  );
};

export {
  BasketConsumer,
  BasketProvider
};

export default BasketContext;
