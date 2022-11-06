import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.complete(this.props.task.text)
  }

  render() {
    let task = this.props.task
    return (
      <div>
        <span>{task.text}</span>
        <button className='complete' onClick={this.complete}>Complete</button>
      </div>
    )
  }
}

export default Task;
