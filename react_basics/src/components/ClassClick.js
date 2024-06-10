import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(){
        super();
        this.state = {message:"Click to see the change"};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler = () => {this.setState(
        (prevState) => ({
            message:"Thanks for clicking"
        }
    ))}

    // clickHandler() {
    //     this.setState({
    //                message:"Thanks for clicking"
    //         });
    // }

  render() {
    return (
      <div>
        {/* Mutliple ways of handling event handlers */}
        <button onClick = {this.clickHandler}>Click</button>
        {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick = {this.clickHandler}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <h4>{this.state.message}</h4>
      </div>
    )
  }
}

export default ClassClick
