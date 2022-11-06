import React, { Component } from 'react';

class Conversation extends Component {
  backToContactsList = () => {
    this.props.displayConversation(null)
  }

  render() {
    return (
      <div >
        {this.props.convo.map(message => {
          return  <div>
                    <span>{message.sender === "self"? "Me" : this.props.sender}: </span>
                    <span className='sender'>{message.text}</span>
                  </div>
        })}

        <button onClick={this.backToContactsList}>Back</button>
      </div>
    );
  }
}

export default Conversation;
