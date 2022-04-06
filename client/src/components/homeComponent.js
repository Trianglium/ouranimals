import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Loading } from './loadingComponent';


function RenderCard({item, isLoading, errMess}) {

    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    return (
      <div className="container">
      </div>
      <div>
        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />

      </div>
    )
  }
}
export default Home;
