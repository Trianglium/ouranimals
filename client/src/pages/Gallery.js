import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, Button, List, Grid } from 'reactstrap';

class Gallery extends Component {
  constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
  }
  componentDidMount() {
        fetch(
"http://localhost:3001/bears")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
            });
        })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) {
      return(
        <div><p>Uh Oh! Something went wrong loading the data</p></div>
      );
    }
    else return (
      <Container>
        <Row>
        <h1>Animal Gallery</h1>
            { items.map((item) => (
              <Col xs={6} md={3}>
                <Card key={ item.id } >
                  <CardImg
                    alt={ item.image }
                    src={ item.image }
                    width="100%"
                  />
                </Card>
              </Col>
        )
      )}
        </Row>
      </Container>
    );
  }
}

export default Gallery
