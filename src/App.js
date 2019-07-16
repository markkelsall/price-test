import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BasketProvider } from './BasketContext';
import BasketPriceConsumer from './BasketPriceConsumer/BasketPriceConsumer';
import BasketExtrasConsumer from './BasketExtrasConsumer';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      carPrice: 150.99,
      currencyDisplay: '£',
      fees: [{
        id: 1,
        amount: 15,
        quantity: 1
      }]
    };
  }

  render () {
    const {carPrice, currencyDisplay, fees} = this.state;

    return (
      <BasketProvider carPrice={carPrice} currencyDisplay={currencyDisplay} fees={fees}>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <BasketExtrasConsumer />
                <BasketPriceConsumer />
            </header>
        </div>
      </BasketProvider>
    );
  } 
}

export default App;
