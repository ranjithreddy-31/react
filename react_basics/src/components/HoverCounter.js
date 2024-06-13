import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class HoverCounter extends Component {
    
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handleFxn}>{this.props.name} Hovered {this.props.count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
