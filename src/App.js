import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import './App.css';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHooks from './SimpleFormInputHooks';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHooks /> 
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks />
      <SimpleFormInputHooks /> */}
      <Clicker />
    </div>
  );
}

export default App;
