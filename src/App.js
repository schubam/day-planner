import React, { Component } from 'react';
import './App.css';
import Day from './components/Day'

class App extends Component {
  render() {
    return (
      <div className='week-container'>
        <Day />
        <Day />
      </div>
    );
  }
}

export default App;