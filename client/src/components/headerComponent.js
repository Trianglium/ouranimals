import React, { Component } from 'react';
import { Media, UncontrolledCarousel, Nav, Navbar, NavbarBrand, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">OurAnimals</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                            <NavLink className="nav-link"  to='/bears'>Bears</NavLink>
                            <NavLink className="nav-link"  to='/dogs'>Dogs</NavLink>
                            <NavLink className="nav-link"  to='/foxes'>Foxes</NavLink>
                            <NavLink className="nav-link"  to='/otters'>Otters</NavLink>
                            <NavLink className="nav-link"  to='/docs'>Documentation</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>OurAnimals</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
