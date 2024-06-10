import React from "react";

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {"msg": "Welcome Visitor"};
    }
    handleClick(){
        this.setState({"msg": "Thank you for clicking"})
    }
    render(){
        return(
            <div>
            <h1>{this.state.msg}</h1>
            <button onClick={()=>this.handleClick()}>Click</button>
            </div>
        );
        }
}

export default Message;