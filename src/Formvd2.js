import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Formvd2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:" ",
            job:" ",
            agree: true,
            movie:" ",
            decription: ""
        };
    }

    handInputname = (event)=>{
        this.setState(
            {
                username: event.target.value
            },
        );
    };
    handInputjob = (event)=>{
        this.setState(
            {
                job: event.target.type ==='radio' ? event.target.checked : event.target.value
            },
        );
    };
    handInputagree = (event)=>{
        this.setState(
            {
                agree: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            },
        );
    };
    handInputmovie = (event)=>{
        this.setState(
            {
                movie: event.target.value 
            },
        );
    };
    handInputdecription = (event)=>{
        this.setState(
            {
                decription: event.target.value 
            },
        );
    };
    handSubmitChange = (event) =>{
        event.preventDefault();
        alert("You are submiting" + " " + this.state.username + " " + this.state.job + " " + this.state.agree + " " + this.state.movie + " " + this.state.decription 
        );
    }
    render() {
        return (
            <form onSubmit={this.handSubmitChange}>
                <label for="name">Name: 
                <input type="text" onChange={this.handInputname}/>
                </label><br/>
                <label for="job" onChange={this.handInputjob} >Job: 
                    <input type="radio" name="job" checked ={this.state.job}/>teacher
                    <input type="radio" name="job" checked ={this.state.job}/>player
                </label><br/>
                <label for="agree">Agree: 
                    <input type="checkbox" checked ={this.state.agree} onChange={this.handInputagree}/>
                </label><br/>
                <label for="movie">Movie: 
                    <select onChange={this.handInputmovie}>
                        <option value="black">kamen rider black</option>
                        <option value="red">kamen rider red</option>
                        <option value="yellow">kamen rider yellow</option>
                        <option value="blu">kamen rider blu</option>
                    </select>
                </label><br/>
                <label for="decription">Decription
                    <textarea rows="4" cols="50" onChange={this.handInputdecription}></textarea>
                </label><br/>
                <label for="submit">
                    <input type="submit"></input>
                </label>
                <h1>Hello {this.state.username}</h1>
                <h1>Hello {this.state.job}</h1>
                <h1>Hello {this.state.agree}</h1>
                <h1>Hello {this.state.movie}</h1>
                <h1>Hello {this.state.decription}</h1>
            </form>
        );
    }
}

export default Formvd2;