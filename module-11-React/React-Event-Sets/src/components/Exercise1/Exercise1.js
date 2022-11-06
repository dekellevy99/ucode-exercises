import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }

  shiftImageBack = () => {
    this.setState({
      currentImg: this.state.currentImg > 0 ? this.state.currentImg-1 : 0
    })
  }

  shiftImageForward = () => {
    let totalImages = this.state.images.length 
    this.setState({
      currentImg: this.state.currentImg < totalImages-1 ? this.state.currentImg+1 : totalImages-1
    })
  }

  render() {
    let curImg = this.state.images[this.state.currentImg]
    console.log(curImg);
    return (
      <div >
        <button className='back' onClick={this.shiftImageBack}>Previous</button>
        <img src={curImg}/>
        <button className='forward' onClick={this.shiftImageForward}>Next</button>
      </div>
    );
  }
}

export default Exercise1;
