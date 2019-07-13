import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TotalPrice from './TotalPrice';
import Extras from './Extras';

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
      }],
      extras: []
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

  render () {
    const {carPrice, currencyDisplay, fees, extras} = this.state;

    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Extras callBack={this.addExtra} />
              <TotalPrice carPrice={carPrice} currencyDisplay={currencyDisplay} fees={fees} extras={extras} />
          </header>
      </div>
    );
  } 
}

export default App;
