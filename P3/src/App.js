import React, { Component } from 'react';
import './App.css';
import Items from './components/items';

class App  extends Component {
  render(){
    return (
      <div className="container">
      <h1 className="text-center">Itemizer</h1>
      <Items />
      </div>
    );
  }
}


export default App;