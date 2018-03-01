import React, { Component } from 'react';
import ListContacts from './ListContacts';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    contacts: []
  }

  render() {
    return (
      <div className="App">
        <ListContacts />
      </div>
    );
  }
}

export default App;
