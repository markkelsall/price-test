import React, { createContext } from 'react';

const PriceContext = createContext({
  car: {},
  setCar: () => {},
  addExtra: () => {}
});

export class PriceProvider extends React.Component {
  setCar = carName => {
    this.setState({
      car: {
        name: carName
      }
    });
  }

  addExtra = extra => {

  }

  state = {
    extras: null,
    car: {},
    setCar: this.setCar,
    addExtra: this.addExtra,
  };



  render() {
    return (
      <PriceContext.Provider value={this.state}>
        {this.props.children}
      </PriceContext.Provider>
    );
  }
}

export const PriceConsumer = PriceContext.Consumer;