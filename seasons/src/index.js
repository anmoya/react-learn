import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {

    constructor(props) {
        super(props);

        // we can set state here
        this.state = { lat: null, errorMessage: '' };
    }

    // we can set state here
    // state = {
    //     latitude: 0
    // }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => this.setState({ errorMessage: err.errorMessage })
        );


        return (
            <div>
                <div>Latitud: {this.state.lat}</div>
                <div>Error: {this.state.errorMessage}</div>
            </div>

        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));