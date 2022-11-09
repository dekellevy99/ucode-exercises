import React, {Component} from "react";

class Score extends Component{
    render(){
        let score = this.props.score;
        let scoreLevel;
        if(score >= 80){
            scoreLevel = 'high-score'
        }else if(score >= 50 && score < 80){
            scoreLevel = 'medium-score'
        }else{
            scoreLevel = 'low-score'
        }

        return (
            <div className={scoreLevel}>{score}</div>
        )
    }
}

export default Score