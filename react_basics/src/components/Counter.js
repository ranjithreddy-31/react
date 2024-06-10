import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state ={count:0};
    }
    Increment = ()=>{
        //this.setState({count:this.state.count+1})
        this.setState((prevState)=>({
            count:prevState.count+5
        }))
    }
    Decrement= ()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
            <h5>Current Count is: {this.state.count}</h5>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            </div>
        );
        }
}

export default Counter;