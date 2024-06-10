import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick = {()=>{props.greet("Child")}}>Click to Greet</button>
    </div>
  )
}

export default ChildComponent;
