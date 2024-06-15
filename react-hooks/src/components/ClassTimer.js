import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         time:0
      }
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.intervel = setInterval(this.tick, 1000) // setInterval calls specified function after every interval
    }

        componentWillUnmount(){
            clearInterval(this.intervel)
        }
    tick = () =>{
        this.setState(
            (prevState) => {
                return {time:prevState.time+1}
            }
        )
    }
  render() {
    return (
      <div>
        <h1>Timer: {this.state.time}</h1>
      </div>
    )
  }
}

export default ClassTimer
