import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item/Item.js';
import tdlData from './tdlData.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tdItems : tdlData,
    }
  }

  /**
   * @param {{ id: number, descripsion: string, completed: boolean }} task 
   */
  handleChange = (task) => {
    const tdItems = this.state.tdItems.map(tsk => tsk.id === task.id ? task : tsk);
    this.setState({ tdItems });
  }

  handleOnDelete = (task) => {
    const result = this.state.tdItems.filter(todo => todo.id !== task.id);
    this.setState({ tdItems: result });
  }

  handleOnEdit = (task) => {
    const result = this.state.tdItems.map(tsk => tsk.id === task.id ? task : tsk);
    this.setState({ tdItems: result });
  }

  renderTask = (task) => {
    return (
        <Item
          key = {task.id}
          task = {task}
          handleChange = {this.handleChange}
          handleOnDelete = {this.handleOnDelete}
          handleOnEdit = {this.handleOnEdit}
        />
      )
  }

  render(){
    return (
      <div className="App">
        <header className="Header">
          <h1>To do List</h1>
          <p>based on React</p>
        </header>
        {this.state.tdItems.map(this.renderTask)}
      </div>
    );
  }
}

export default App;
