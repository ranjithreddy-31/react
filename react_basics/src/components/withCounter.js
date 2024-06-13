import React from 'react'

const UpdatedComponent = (OriginalComponent) =>{
    class NewComponent extends React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }

        handleAction = () => {
            this.setState(
                (prevState)=>{
                    return {
                        count:prevState.count+1
                    }
                }
            )
        }
        render(){
            return <OriginalComponent name="Ranjith" count = {this.state.count} handleFxn={this.handleAction}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent