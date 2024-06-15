import React from 'react'
import { useReducer } from 'react'

const initisalState = {
    firstCounter:0
}
const reducer = (state, action) => { 
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter+1}
        case 'decrement':
            return {firstCounter:state.firstCounter-1}
        case 'reset':
            return initisalState
        default:
            return state
    }
    
}

function UseReducerComplex() {

    const [count, dispatch] = useReducer(reducer, initisalState)
  return (
    <div>
        <div>
            Count-{count.firstCounter}
        </div>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerComplex
