import React, {Component} from "react";
import Letter from "./Letter";


class Solution extends Component{
    render(){
        let secretWord = this.props.secretWord
        let hint = this.props.hint
        const letterStatus = this.props.letterStatus
        return (
            <div>
                {[...secretWord].map((letter, index) => 
                    <Letter 
                        letter={letterStatus[letter]? letter : '_'}
                        key={index}
                    />
                )} 
                <div>{hint}</div>
            </div>
        )
    }
}

export default Solution