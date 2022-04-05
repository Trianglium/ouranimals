import React, { Component } from 'react';
import { Media, UncontrolledCarousel, Nav, Navbar, NavbarBrand, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
      <div className="header">
        <Navbar dark>
        <div className="container">
        <NavbarBrand className="mr-auto" href="/">OurAnimals</NavbarBrand>
          <Nav className="ml-auto">
            <NavItem>
            <NavLink className="nav-link"  to='/bears'>Bears</NavLink>
            <NavLink className="nav-link"  to='/dogs'>Dogs</NavLink>
            <NavLink className="nav-link"  to='/foxes'>Foxes</NavLink>
            <NavLink className="nav-link"  to='/otters'>Otters</NavLink>
            <NavLink className="nav-link"  to='/docs'>Documentation</NavLink>
            </NavItem>
          </Nav>
        </div>
        </Navbar>
      </div>
    )
}

export default Header;
