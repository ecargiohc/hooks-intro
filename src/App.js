import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import './App.css';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      <CounterHooks /> 
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks />
    </div>
  );
}

export default App;
