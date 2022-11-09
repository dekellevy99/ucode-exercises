import React from 'react'
import { Component } from 'react'

class EndGame extends Component{
    
    checkIfUserWon = () => {
        let secretWord = this.props.secretWord
        let letterStatus = this.props.letterStatus
        return [...secretWord].every(letter => letterStatus[letter] === true);
    }

    checkIfUserLose = () => {
        let score = this.props.score;
        return score <= 0;
    }

    render(){
        let endGameMsg = "";
        if (this.checkIfUserWon()){
            endGameMsg = "Congratulations"
        }else if(this.checkIfUserLose()){
            endGameMsg = `The secret word was ${this.props.secretWord}`
        }
        return (
            <div>{endGameMsg}</div>
        )
    }
}

export default EndGame