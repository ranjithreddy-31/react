import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount = () => {
        this.setState((prevState)=>{
            return {count:prevState.count+1}
        })
    }
    
  render() {
    return (
      <div>
        <h1>Counter using State</h1>
        <h4>current count is {this.state.count}</h4>
        <button onClick={this.incrementCount}>Click to Increment</button>
      </div>
    )
  }
}

export default ClassCounter
