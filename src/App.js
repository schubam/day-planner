import React, { Component } from 'react';
import './App.css';
// import Day from './components/Day'
import FoodSearch from './components/FoodSearch'
import SelectedFoods from './components/SelectedFood'


class App extends Component {
  state = {
    foods: []
  };

  addFood = (food) => {
    const foods = this.state.foods;
    this.setState({
      foods: foods.concat(food)
    });
  }

  removeFood = (index) => {
    const filteredFoods = this.state.foods.filter((_, i) => { 
      return i !== index
    });
    this.setState({
      foods: filteredFoods 
    });
  }

  render() {
    const { foods } = this.state;
    return (
      <div className='app'>
        <FoodSearch 
          onFoodClick={this.addFood}
        />
        <SelectedFoods 
          foods={foods}
          onFoodClick={this.removeFood}
         />
        {/* <div className='week-container'>
          <Day title='Monday' breakfast=''/>
          <Day title='Tuesday'/>
          <Day title='Wednesday'/>
        </div> */}
      </div>
    );
  }
}

export default App;