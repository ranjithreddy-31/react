import React, { Component } from 'react'
class User extends Component {
  render() {
    console.log(this.props.name)
    return (
      <div>
        {this.props.name(false)}
      </div>
    )
  }
}

export default User
