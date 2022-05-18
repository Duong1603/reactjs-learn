import React, { Component } from 'react';

class Formvd3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ' Dương ',
            age: ' 21 '
        }
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
    };
    updateName(e){
        this.setState({name: e.target.value});
    }
    updateAge(event){
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div>
                <Content 
                myNameProp = {this.state.name} updateNameProp = {this.updateName} 
                myAgeProp = {this.state.age} updateAgeProp = {this.updateAge}>
                </Content>
            </div>
        );
    }
}

class Content extends Component{
    render(){
        return(
            <div>
                <input type = "text" value ={this.props.myNameProp} onChange = {this.props.updateNameProp}/>
                <h3>{this.props.myNameProp}</h3>
                <input type = "text" value ={this.props.myAgeProp} onChange = {this.props.updateAgeProp}/>
                <h3>{this.props.myAgeProp}</h3>
            </div>
        )
    }
}

export default Formvd3;