import React from 'react';
import logo from './logo.svg';
import AnalogClock, { Themes } from 'react-analog-clock'

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <AnalogClock theme={Themes.dark} style={{height: 100, width: 100}} />
    </div>
  );
}

export default App;
