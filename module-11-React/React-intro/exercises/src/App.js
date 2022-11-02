import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return "some text"
  }

  getMorningGreeting() {
    return (<div>Good Mornning Sir</div>)
  }

  getEveningGreeting() {
    return (<div>Good Evenning Sir</div>)
  }

  showCompany(name, revenue) {
    return (<div>{name} makes {revenue} every year</div>)
  }

  showCompany2(name, revenue) {
    return `${name} makes ${revenue} every year!!!`
  }


  getClassName(temperature) {
    if(temperature <= 15){
      return "freezing"
    }else if(temperature > 15 && temperature < 30){
      return "fair"
    }else{
      return "hell-scape"
    }
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>Stuff: {this.getStuff()} </h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() > 12 ? this.getEveningGreeting() : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
          {[this.getMorningGreeting(), this.getEveningGreeting(), <p>sone text</p>]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(company => this.showCompany(company.name, company.revenue))}
            {companies.map(company => <div>{this.showCompany2(company.name, company.revenue)}</div>)}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            <div id='weatherBox' className={this.getClassName(10)}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
