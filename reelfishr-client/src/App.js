import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import MoviesContainer from './components/MoviesContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
