import React, { createContext } from 'react';

const PriceContext = createContext({
  addExtra: () => {}
});

class PriceProvider extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      extras: [],
      carPrice: props.carPrice,
      currencyDisplay: props.currencyDisplay,
      fees: props.fees,
      setCar: this.setCar,
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
      <PriceContext.Provider value={this.state}>
        {this.props.children}
      </PriceContext.Provider>
    );
  }
}

const PriceConsumer = PriceContext.Consumer;

export {
  PriceProvider,
  PriceConsumer
};
