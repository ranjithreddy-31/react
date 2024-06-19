import React, { useState } from 'react'


const initialState = ["A", "B"]
const ArrayUseState = () => {
    const [state, setState] = useState(initialState)
    const handleClick = () =>{
        const newState = [...state, 'c']
        setState(newState)
    }
    console.log("ArrayUseState Render")
  return (
    <div>
      <button onClick={handleClick}>click</button>
      {state.map(s=>{return <h5 key={s}>{s}</h5>})}
    </div>
  )
}

export default ArrayUseState
