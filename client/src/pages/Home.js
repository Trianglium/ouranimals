import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, Button, UncontrolledCarousel } from 'reactstrap';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={12} sm={6}>

          </Col>
          <Col xs={12} sm={6}>

          </Col>

        </Row>
        <Row>
          <Col xs={12} sm={6}>

          </Col>
          <Col xs={12} sm={6}>

          </Col>

        </Row>
      </Container>
    );
  }
}

export default Home
