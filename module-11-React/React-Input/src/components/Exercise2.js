import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}


handleInput = (event) => {
    const target = event.target
    let value = target.value
    let name = target.name
    this.setState({
        [name]: value
    }, () => {
        console.log(`${this.state.name} selected ${this.state.fruit}`);
    })
}

render() {
    return (
        <div>
            <input name="name" id="name-input" value={this.state.name} onChange={this.handleInput}/>
            <select name="fruit" id="select-input" onChange={this.handleInput}>
                <option value="orange">Orange</option>
                <option value="apple">Apple</option>
                <option value="watermelon">Watermelon</option>
                <option value="banana">Banana</option>
            </select>
        </div>
    );
}
}

export default Exercise2;