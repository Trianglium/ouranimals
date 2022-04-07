import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#">Bears</a>
        <a href="#">Dogs</a>
        <a href="#">Foxes</a>
        <a href="#">Otters</a>
        <a href="#" className="right">API</a>
      </div>
    );
  }
}

export default Navbar
