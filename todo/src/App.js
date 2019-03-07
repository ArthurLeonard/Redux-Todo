import React, { Component } from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Display from './components/display';
import AddToDo from './components/addtodo';

import logo from './logo.svg';
import './App.css';


// const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display    />
        <AddToDo    />
      </div>
    );
  }
}

export default App;
