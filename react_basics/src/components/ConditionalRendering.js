import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(){
        super();
        this.state = {flag:true, text:"Log Out", msg:"Welcome"}
    }
changeStatus = () => {
    this.setState((prevState)=>({flag:!prevState.flag, text:prevState.flag?"Login":"LogOut", msg:prevState.flag?"GoodBye":"Welcome"}));
}
  render() {
    return (<div>
                {this.state?<div>{this.state.msg}</div>:<div>You are Logged Out</div>}
                <button onClick={this.changeStatus}>{this.state.text}</button>
            </div>);
  }
}

export default ConditionalRendering
