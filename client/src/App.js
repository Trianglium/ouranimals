import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

import HeaderComponent from './components/headerComponent';


class App extends Component {
  render() {
    return (
        <div className="App">
          <HeaderComponent />
          <h1>OurAnimals</h1>
        </div>
    );
  }
}

export default App;
