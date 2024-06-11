import React, { Component } from 'react'

class Mounting extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"Ranjith"
        };
        console.log("This is a constructor");
    }
static getDerivedStateFromProps(props,state)
{
    console.log("getDerivedStateFromProps");
    return null;
}
componentDidMount(){
    console.log("componentDidMount")
}
  render() {
    console.log("render");
    return (
      <div>
        <h1> Mounting render</h1>
      </div>
    )
  }
}

export default Mounting
