import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import logo from '../logo.svg';
import logoLight from '../logo-light.svg';
import logoDark from '../logo-dark.svg';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="oa-nav">
        <Navbar className="oa-nav" expand="md">
          <img src={logoLight} className="App-logo" alt="OurAnimals logo" />
          <NavbarBrand href="/">Our Animals</NavbarBrand>
          <NavbarToggler dark onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Trianglium/ouranimals">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Image Library
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  Bears
                </DropdownItem>
                <DropdownItem>
                  Dogs
                </DropdownItem>
                  <DropdownItem>
                    Foxes
                  </DropdownItem>
                  <DropdownItem>
                    Otters
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    All Animals
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
