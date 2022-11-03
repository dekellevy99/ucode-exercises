import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return (
            <div>
                <h4>STORE:</h4>
                {this.props.store.map(item => <Item name={item.item} price={this.props.shouldDiscount? (1 - item.discount)*item.price: item.price} key={item.item}/>)}
            </div>
        )

    }
}

export default Home