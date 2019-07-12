import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PriceProvider } from './PriceContext';
import TotalPrice from './TotalPrice';

function App() {
  return (
    <div className="App">
      <PriceProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TotalPrice />
        </header>
      </PriceProvider>
    </div>
  );
}

export default App;
