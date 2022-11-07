import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    handleInput = (event) => {
        const target = event.target;
        let value = target.value;
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    alertMessage = () => {
        let name = this.state.name;
        let age = this.state.age;
        alert(`${name}: ${age}`)
    }

    render() {
        return (
            <div>
                <input name="name" id="name-input" value={this.state.name} onChange={this.handleInput}/>
                <input name="age" id="age-input" value={this.state.age} onChange={this.handleInput}/>
                <button onClick={this.alertMessage}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;