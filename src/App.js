import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item/Item.js';
import tdlData from './tdlData.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tdItems : tdlData
    }
  }
  render(){
    const {tdItems} = this.state;
    const taskItems = tdItems.map( item => {
      return(
        <Item
          key={item.id}
          descripsion={item.descripsion}
          completed={item.completed}
        />
      )
    })   
    return (
      <div className="App">
        <header className="Header">
          <h1>To do List</h1>
          <p>based on React</p>
        </header>
        {taskItems}
      </div>
    );
  }
}

export default App;
