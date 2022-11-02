import React, { Component } from 'react';
import './App.css';
import { Dummy } from './components/Dummy'
import Spamalot from './components/Spamalot';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Menu from './components/Menu';

// Spot Check 1
export class Sum extends Component {
  render() {
    let num1 = 100;
    let num2 = 200;
    return (
      <div>SUM: {num1 + num2}</div>
    )
  }
}

// Spot Check 2
class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <span>Home</span>
        <span>About</span>
      </div>
    )
  }
}

class LandingPage extends Component {
  render(){
    return (
      <h1>WELCOME!!!!</h1>
    )
  }
}

// Spot Check 3
class AboutUs extends Component {
  render() {
    return <p>This is an example of an about page~</p>
  }
}
class Profile extends Component {
  render() {
    return <p>This is an example of a user profile~</p>
  }
}

// Spot Check 4
export const Banner = () => <div className="banner">THE LOGO!!</div>


// Spot Check 5
export class About extends Component {
  render(){
    return (
      <div>
        <SignUp/>
        <Blurb/>
      </div>
    )
  }
}


export class SignUp extends Component {
  render(){
    return (<div>-- Sign Up Componenet --</div>)
  }
}

export class Blurb extends Component {
  render(){
    return (<div>-- Blurb Componenet --</div>)
  }
}



export class App extends Component {

  render() {
    let isUserLoggedIn = localStorage.getItem('loggedIn')
    let componentToDisplay = isUserLoggedIn ?
      <Profile /> :
      <AboutUs />

    return (
      <div className="app">

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 2</h4>
          <div className="exercise" id="spotcheck-2">
            <Nav />
            <LandingPage />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 3</h4>
          <div className="exercise" id="spotcheck-3">
            {componentToDisplay}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 4</h4>
          <div className="exercise" id="spotcheck-4">
            {Banner()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 5</h4>
          <div className="exercise" id="spotcheck-5">
            <About/>
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            <Dummy/>
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            <Spamalot/>
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 4</h4>
          <div className="exercise" id="ex-4">
            <NavBar/>
            <Menu/>
            <Checkout/>
          </div>
        </div>
      </div>
    )
  }
}

