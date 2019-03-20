import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Articles</h2>
        </header>
        <div className="App-form">
        <Form/>
        </div>
        <div className="App-list">
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
