import React from 'react'
import { useReducer } from 'react'

const initisalState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initisalState
        default:
            return state
    }
    
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initisalState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initisalState)
  return (
    <div>
        <div>
            Count-{count}
        </div>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
      <div>
            Count-{countTwo}
        </div>
      <button onClick={()=>dispatchTwo("increment")}>Increment</button>
      <button onClick={()=>dispatchTwo("decrement")}>Decrement</button>
      <button onClick={()=>dispatchTwo("reset")}>Reset</button>
    </div>
  )
}

export default CounterTwo
