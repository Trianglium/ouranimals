import React, { Component } from "react";

class OurAnimals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            animals: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8081/api/images')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        animals: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, animals } = this.state;
        if (error) {
            return (
                <div>Error: {error.message}</div>
            );
        } else if (!isLoaded) {
            return (
            <div>Loading...</div>
            );
        } else {
            return (
                <div>
                  {animals.map((animal_im) => ((<img src={animal_im.image} alt={animal_im.type}/>)))}
                </div>
            );
        }

    }
};

export default OurAnimals;
