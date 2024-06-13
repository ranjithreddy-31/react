import React, { Component } from 'react'
import ContextB from './ContextB'
import { Provider } from './Context'

export class ContextA extends Component {
  render() {
    return (
      <div>
        <Provider value='Ranjith Reddy Gaddam'>
        <ContextB></ContextB>
        </Provider>
      </div>
    )
  }
}

export default ContextA
