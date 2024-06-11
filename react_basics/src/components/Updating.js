import React, { Component } from 'react'

class Updating extends Component {
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

shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate");
    return null;
}

componentDidUpdate(){
    console.log("componentDidUpdate")
}

changeState = () => {
    this.setState({name:"Reddy"})
}
  render() {
    console.log("render");
    return (
      <div>
        <h1> Updating Life Cycle</h1>
        <button onClick={this.changeState}>click</button>
      </div>
    )
  }
}

export default Updating
