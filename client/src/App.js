import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { ConfigureStore } from './redux/configureStore';

import Header from './components/headerComponent'


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
        </div>
    );
  }
}

export default App;
