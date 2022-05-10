import React, { Component } from 'react';
// import React, {useState} from 'react';
// import ReactDom from 'react-dom';

// const [count, setCount] = Component(0);
class Vidu4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "Yellow"});
    }

    render() {
        return (
            <div>
                <h1>My{this.state.brand}</h1>
                <p>
                    It is a {this.state.color}<br/>
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

export default Vidu4;