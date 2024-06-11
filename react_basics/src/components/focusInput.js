import React, { Component } from 'react'
import ClassRef from './ClassRef'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef();
    }
    
    ClickHandler = () =>{
        this.componentRef.current.focusInput();
    }
  render() {
    return (
      <div>
        <ClassRef ref={this.componentRef}></ClassRef>
        <button onClick={this.ClickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FocusInput


