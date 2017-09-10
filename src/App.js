import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
        <h1>Welcome to my homepage!</h1>
        <h2>About Me</h2>
        <p>Show some content here</p>
      </div>
    );
  }
}

export default App;