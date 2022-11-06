import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  render() {
    return (
      <div >
        {this.props.contacts.map(contact => <Contact key={contact} name={contact}  displayConversation={this.props.displayConversation}/>)}
      </div>
    );
  }
}

export default List;
