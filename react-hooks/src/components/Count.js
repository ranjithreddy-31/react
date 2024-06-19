import React from 'react'

function Count(props) {
    console.log("Rendering Count "+props.children)
  return (
    <div>
      <h5>{props.children} - {props.count}</h5>
    </div>
  )
}

export default React.memo(Count)
