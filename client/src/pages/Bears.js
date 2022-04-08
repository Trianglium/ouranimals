import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BearsUI extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} className="align-middle">
            <Breadcrumb>
               <BreadcrumbItem>
                 <a href="/">
                   OurAnimals
                 </a>
               </BreadcrumbItem>
               <BreadcrumbItem>
                 <a href="/library">
                   Image Library
                 </a>
               </BreadcrumbItem>
               <BreadcrumbItem active>
                 Data
               </BreadcrumbItem>
           </Breadcrumb>
           </Col>
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

export default BearsUI
