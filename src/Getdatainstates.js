import React, { Component } from 'react';
import Products_data from './data';

class Getdatainstates extends Component {
    constructor(props){
        var arr = Products_data("products");
        super(props);
        this.state = {arr};
    }
    render() {
        return (
            <div>{ 
                this.state.arr.map(key =>                    
                    <div>
                        <h2>Tên: {key.name}</h2>
                        <img src={key.img} alt=""/>
                        <h2>Detail: {key.detail}</h2>
                    </div>
                    
                )
                }  
            </div>
        );
    }
}

export default Getdatainstates;