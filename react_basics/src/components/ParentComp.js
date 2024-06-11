import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"ranjith"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Ranjith"
            })
        },2000)
    }
    
  render() {
    console.log('Parent Comp render')
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
