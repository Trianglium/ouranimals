import React, { Component } from 'react';
import { Media, UncontrolledCarousel, Nav, Navbar, NavbarBrand, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div>
        <Navbar dark expand="lg">
        <div className="container">
        <NavbarBrand className="mr-auto" href="/">OurAnimals</NavbarBrand>
          <Nav className="ml-auto">
            <NavItem>
            <NavLink className="nav-link"  to='/bears'>Bears</NavLink>
            <NavLink className="nav-link"  to='/dogs'>Dogs</NavLink>
            <NavLink className="nav-link"  to='/foxes'>Foxes</NavLink>
            <NavLink className="nav-link"  to='/otters'>Otters</NavLink>
            <NavLink className="nav-link"  to='/'>Documentation</NavLink>
            </NavItem>
          </Nav>
        </div>
        </Navbar>

        <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                              <UncontrolledCarousel
                                items={[
                                  {
                                    altText: 'Slide 1',
                                    caption: 'Slide 1',
                                    key: 1,
                                    src: 'https://picsum.photos/id/123/1200/600'
                                  },
                                  {
                                    altText: 'Slide 2',
                                    caption: 'Slide 2',
                                    key: 2,
                                    src: 'https://picsum.photos/id/456/1200/600'
                                  },
                                  {
                                    altText: 'Slide 3',
                                    caption: 'Slide 3',
                                    key: 3,
                                    src: 'https://picsum.photos/id/678/1200/600'
                                  }
                                ]}
                               />
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default Header;
