import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp Render')
    return (
      <>
        <h1>This is Pure Component {this.props.name}</h1>
      </>
    )
  }
}

export default PureComp
