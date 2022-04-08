import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, Button, UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/dogspromo.png',
    altText: 'Bears API Promo',
    caption: 'Life without browsing /bears, is unbearable',
    header: 'Bear'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Dogs API Promo',
    caption: 'Swing by /dogs and get b*tches today!',
    header: 'Dogs'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Foxes API Promo',
    caption: 'For fox sakes, check out our foxes!',
    header: 'Foxes'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Otters API Promo',
    caption: 'Find your significant otter today!',
    header: 'Otters'
  }
];

const LibraryCarousel = () => <UncontrolledCarousel items={items} />;

class ImageLibrary extends Component {

    render() {
        return(
            <Container>
                <Row>
                <LibraryCarousel />
                </Row>
                <Row>
                    <Col xs={6} className="align-middle">>
                      <Card
                        body
                        className="text-center"
                      >
                        <CardTitle tag="h2" className="mt-5">
                          Bears
                        </CardTitle>
                        <CardText>
                          <h3><small>We guarantee that you’ll be beary satisfied with our bear collection.</small></h3>
                        </CardText>
                        <Button>
                          Browse Bears
                        </Button>
                      </Card>
                    </Col>

                    <Col xs={6} className="align-middle">>
                      <Card>
                        <CardImg
                          alt="Bears"
                          src="https://picsum.photos/318/180"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} className="align-middle">>
                      <Card>
                        <CardImg
                          alt="Dogs"
                          src="https://picsum.photos/318/180"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                    <Col xs={6} className="align-middle">>
                      <Card
                        body
                        className="text-center"
                      >
                        <CardTitle tag="h2" className="mt-5">
                          Dogs
                        </CardTitle>
                        <CardText>
                          <h3><small>We’ll throw you a bone and share the cutest puppers on the web.</small></h3>
                        </CardText>
                        <Button>
                          Browse Dogs
                        </Button>
                      </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} className="align-middle">>
                      <Card
                        body
                        className="text-center"
                      >
                        <CardTitle tag="h2" className="mt-5" className="mt-4">
                          Foxes
                        </CardTitle>
                        <CardText>
                        <h3><small>Browse our fox collection and find out what the fox says.
                        </small></h3>
                        </CardText>
                        <Button>
                          Browse Foxes
                        </Button>
                      </Card>
                    </Col>
                    <Col xs={6} className="align-middle">>
                      <Card>
                        <CardImg
                          alt="Foxes"
                          src="https://picsum.photos/318/180"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} className="align-middle">>
                      <Card>
                        <CardImg
                          alt="Otters"
                          src="https://picsum.photos/318/180"
          top
                          width="100%"
                        />
                      </Card>
                    </Col>
                    <Col xs={6} className="align-middle">>
                      <Card
                        body
                        className="text-center"
                      >
                        <CardTitle tag="h2" className="mt-5">
                          Otters
                        </CardTitle>
                        <CardText>
                        <h3><small>We offer otter photos like no otter!</small></h3>
                        </CardText>
                        <Button>
                          Browse Otters
                        </Button>
                      </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default ImageLibrary
