import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PriceProvider } from './PriceContext';
import TotalPriceConsumer from './TotalPriceConsumer';
import ExtrasConsumer from './ExtrasConsumer';

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
      <PriceProvider carPrice={carPrice} currencyDisplay={currencyDisplay} fees={fees}>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ExtrasConsumer />
                <TotalPriceConsumer />
            </header>
        </div>
      </PriceProvider>
    );
  } 
}

export default App;
