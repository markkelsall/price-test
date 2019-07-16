import React, { createContext } from 'react';

const BasketContext = createContext({
  addExtra: () => {}
});

class BasketProvider extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      extras: [],
      carPrice: props.carPrice,
      currencyDisplay: props.currencyDisplay,
      fees: props.fees,
      addExtra: this.addExtra,
    };
  }

  addExtra = (id, amount, payNow) => {
    const { extras } = this.state;
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

    this.setState(prevState => ({
      ...prevState,
      extras
    }));
  }

  render() {
    return (
      <BasketContext.Provider value={this.state}>
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}

const BasketConsumer = BasketContext.Consumer;

export {
  BasketProvider,
  BasketConsumer
};
