import React, {Component} from "react";

class Letter extends Component{

    selectLetter = () => {
        if(!this.props.wasSelected){
            this.props.selectLetter(this.props.letter)
        }
    }

    render(){
        let wasSelected = this.props.wasSelected
        return (
            <span onClick={this.selectLetter} className={wasSelected? "selected-letters" : "non-selected-letters"}>{this.props.letter}</span>
        )
    }

}

export default Letter