import React, { Component } from 'react'

class LifeCycleMethodsPractice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    componentDidMount(){
        console.log('this is component mount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('this is shouldComponentUpdate')
        //return nextState.count !== this.state.count;
        return false;
      }
    componentDidUpdate(){
        console.log('this is componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('Component will unmount');
      }
    
  render() {
    return (
      <div>
        <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
      </div>
    )
  }
}

export default LifeCycleMethodsPractice
