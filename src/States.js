import React, { Component } from 'react';
import Products_data from './data';
import One from './One';
class States extends Component {
    constructor(){
        super()
        this.state = Products_data("products")
    }
    render() {
        return (
            <div>
                {this.state.map(value =>{
                        return (<One img={value.img} name={value.name} detail={value.detail}></One>)
                    }
                        )
                }
            </div>
        );
    }
}

export default States;