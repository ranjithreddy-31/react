import React, { Component } from 'react'
import ContextC from './ContextC'

class ContextB extends Component {
  render() {
    return (
      <div>
        <ContextC></ContextC>
      </div>
    )
  }
}

export default ContextB
