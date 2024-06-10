import React from "react";

class Welcome extends React.Component{
    render(){
        return(
            <div>
            <h1> Welcome {this.props.name}!!, this is a class component</h1>
            {this.props.children}
            </div>
        );
        }
}

export default Welcome;