import React, { Component } from 'react';
class Timer extends Component {

  constructor() {
    super()
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() })
      console.log("Updated time")
    }, 1000)
  }

  render() {
    return <div> {this.state.time.toLocaleTimeString()}</div >
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      showTime: true
    }
  }

  hideTime = () => {
    this.setState({ showTime: false })
  }

  render() {
    let timer = this.state.showTime ? <Timer /> : null
    return (
      <div className="App">
        {timer}
        <button onClick={this.hideTime}>Hide Time</button>
      </div>
    );
  }
}

export default App;
