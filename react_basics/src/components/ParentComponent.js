import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
    constructor(){
        super();
        this.state = {name:"parent"};
    }
    greet = (fromName) =>{ alert(`Hello ${this.state.name} from ${fromName}`) };
  render() {
    return (
      <div>
        <ChildComponent greet={this.greet} />
      </div>
    )
  }
}

export default ParentComponent
