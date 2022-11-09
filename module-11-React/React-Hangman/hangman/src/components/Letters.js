import React, {Component} from "react";
import Letter from "./Letter";

class Letters extends Component{
    render(){
        return (
            <div>
                <div>Available Letters</div>
                {Object.keys(this.props.letterStatus).map((letter, index) => 
                    <Letter 
                        letter={letter}
                        wasSelected={this.props.letterStatus[letter]}
                        key={index}
                        selectLetter={this.props.selectLetter}
                    />
                )}
            </div>
        )
    }
}

export default Letters