import React, { Component } from 'react'
import { Consumer } from './Context'
class ContextC extends Component {
  render() {
    return (
      <div>
        <Consumer>
            {
                (username) => { return <h1>This is Compeonet C and user name is {username} </h1>}
            }
        </Consumer>
      </div>
    )
  }
}

export default ContextC
