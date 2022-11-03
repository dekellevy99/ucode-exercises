import React, { Component } from 'react';

class Landing extends Component {
    constructor(){
        super()
    }


    render() {
        let hottest_item = this.props.store.find(item => item.hottest === true)
        let hottest_item_price = hottest_item.price

        return (
            <div>Welcome {this.props.user}. The hottest item in the store is {hottest_item.item} for {hottest_item_price}</div>
        )

    }
}

export default Landing