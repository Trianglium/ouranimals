import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  List,
  ListGroup
} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div className="sitemap">
        <Container>
          <Row>
            <Col xs={1} sm={1}>
            </Col>
            <Col xs={12} sm={3}>
              <h4>Image Library</h4>
              <ul>
              <li><a href="/animals">Browse All Animals</a></li>
              <li><a href="/bears">Bears</a></li>
              <li><a href="/dogs">Dogs</a></li>
              <li><a href="/foxes">Foxes</a></li>
              <li><a href="/otters">Otters</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={3}>
              <a href="https://github.com/Trianglium/ouranimals">GitHub</a></Col>
            <Col xs={12} sm={3}>
              <a href="/docs">GitHub</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer
