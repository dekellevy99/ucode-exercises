import './App.css';
import React, {Component} from "react";
import Score from './components/Score'
import Solution from './components/Solution'
import Letters from './components/Letters'
import EndGame from './components/EndGame';

class App extends Component{
  constructor(){
    super();
    this.state = {
      letterStatus: this.generateLetterStatus(),
      solution: {
        word: "BYTES",
        hint: "test"
      },
      score: 100
    }
  }

  generateLetterStatus(){
      let letterStatus = {}
      for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i)] = false
      }
      return letterStatus
  }

  selectLetter = (letter) => {
    let letterStatus = this.state.letterStatus
    letterStatus[letter] = true
    let currentScore = this.state.score
    let newScore = (this.state.solution.word.includes(letter)? currentScore+5 : currentScore-20)
    this.setState({
      letterStatus: letterStatus,
      score: newScore
    })
  }

  render(){
    return (
      <div>
        <Score score={this.state.score}/>
        <Solution secretWord={this.state.solution.word} hint={this.state.solution.hint} letterStatus={this.state.letterStatus}/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
        <EndGame secretWord={this.state.solution.word} letterStatus={this.state.letterStatus} score={this.state.score}/>
      </div>
    );

  }
}

export default App;
