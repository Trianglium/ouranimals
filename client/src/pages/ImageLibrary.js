import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, Button, ListGroupItem, ListGroup,ButtonGroup, UncontrolledCarousel, BreadcrumbItem, Breadcrumb, CardBody } from 'reactstrap';

const items = [
  {
    src: 'https://raw.githubusercontent.com/Trianglium/ouranimals/api/endpoints/oaServer/public/images/promos/bearspromo.png',
    altText: 'Bears API Promo'
  },
  {
    src: 'https://raw.githubusercontent.com/Trianglium/ouranimals/api/endpoints/oaServer/public/images/promos/dogspromo.png',
    altText: 'Dogs API Promo'
  },
  {
    src: 'https://raw.githubusercontent.com/Trianglium/ouranimals/api/endpoints/oaServer/public/images/promos/foxespromo.png',
    altText: 'Foxes API Promo'
  },
  {
    src: 'https://raw.githubusercontent.com/Trianglium/ouranimals/api/endpoints/oaServer/public/images/promos/otterspromo.png',
    altText: 'Otters API Promo'

  }
];

const LibraryCarousel = () => <UncontrolledCarousel items={items} />;

class ImageLibrary extends Component {

    render() {
        return(
            <Container>

                <Row className="mt-4">
                <LibraryCarousel />
                </Row>

                <Row className="mt-4">
                    <Col xs={6} className="align-middle">
                      <Card
                        body
                        className="text-center"
                      >
                        <CardBody>
                            <CardTitle tag="h2" className="display-5">
                              Bears
                            </CardTitle>
                            <CardText className="mt-4">
                              <h3><small>We guarantee that you’ll be beary satisfied with our bear collection.</small></h3>
                            </CardText>
                            <ListGroup horizontal className="text-center">
                              <ListGroupItem
                                href="#"
                                tag="a"
                              >
                              Browse Bears
                              </ListGroupItem>
                              <ListGroupItem
                                href="#"
                                tag="a"
                              >
                              Try it
                              </ListGroupItem>
                              <ListGroupItem
                                href="#"
                                tag="a"
                              >
                              Read the docs
                              </ListGroupItem>
                            </ListGroup>
                          </CardBody>
                      </Card>
                    </Col>

                    <Col xs={6} className="align-middle">
                      <Card className="text-center">
                        <CardImg
                          alt="Bears"
                          src="https://raw.githubusercontent.com/Trianglium/ouranimals/main/server/public/images/bears/33.jpg"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                </Row>

                <Row>
                  <Col xs={6} className="align-middle">
                    <Card>
                          <CardImg
                            alt="Dogs"
                            src="https://raw.githubusercontent.com/Trianglium/ouranimals/main/server/public/images/dogs/29.jpg"
            top
                            width="100%"
                          />
                      </Card>
                    </Col>
                    <Col xs={6} className="align-middle">
                      <Card
                        body
                        className="text-center"
                      >
                      <CardBody>
                        <CardTitle tag="h2" className="display-5">
                          Dogs
                        </CardTitle>
                        <CardText>
                          <h3><small>We’ll throw you a bone and share the cutest puppers on the web.</small></h3>
                        </CardText>
                        <ListGroup horizontal className="text-center">
                          <ListGroupItem
                            href="/dogs"
                            tag="a"
                          >
                          Browse Dogs
                          </ListGroupItem>
                          <ListGroupItem
                            href="/dogs/1"
                            tag="a"
                          >
                          Try it
                          </ListGroupItem>
                          <ListGroupItem
                            href="/docs"
                            tag="a"
                          >
                          Read the docs
                          </ListGroupItem>
                        </ListGroup>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6} className="align-middle">
                    <Card
                        body
                        className="text-center"
                      >
                      <CardBody>
                        <CardTitle tag="h2" className="display-5">
                          Foxes
                        </CardTitle>
                        <CardText>
                        <h3><small>Browse our fox collection and find out what the fox says.
                        </small></h3>
                        </CardText>
                        <div className="d-inling-flex text-center">
                          <ListGroup horizontal className="text-center">
                              <ListGroupItem
                                href="/foxes"
                                tag="a"
                              >
                              Browse Foxes
                              </ListGroupItem>
                              <ListGroupItem
                                href="/foxes/1"
                                tag="a"
                              >
                              Try it
                              </ListGroupItem>
                              <ListGroupItem
                                href="/docs"
                                tag="a"
                              >
                              Read the docs
                              </ListGroupItem>
                          </ListGroup>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                    <Col xs={6} className="align-middle">
                      <Card>
                        <CardImg
                          alt="Foxes"
                          src="https://raw.githubusercontent.com/Trianglium/ouranimals/main/server/public/images/foxes/31.jpg"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} className="align-middle">
                      <Card>
                        <CardImg
                          alt="Otters"
                          src="https://raw.githubusercontent.com/Trianglium/ouranimals/main/server/public/images/otters/31.jpg"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                    <Col xs={6} className="align-middle">
                      <Card
                        body
                        className="text-center"
                      >
                        <CardBody>
                          <CardTitle tag="h2" className="display-5">
                            Otters
                          </CardTitle>
                          <CardText>
                          <h3><small>We offer otter photos like no otter!</small></h3>
                          </CardText>
                            <ListGroup horizontal className="text-center">
                              <ListGroupItem
                                href="/otters"
                                tag="a"
                              >
                              Browse Otters
                              </ListGroupItem>
                              <ListGroupItem
                                href="/otters/1"
                                tag="a"
                              >
                              Try it
                              </ListGroupItem>
                              <ListGroupItem
                                href="/docs"
                                tag="a"
                              >
                              Read the docs
                              </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                      </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default ImageLibrary
