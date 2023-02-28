import React, { Component } from "react";
import logo from "../assets/Holberton_logo.jpg";
import './Header.css'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
      </React.Fragment>
    );
  }
};

export default App;
