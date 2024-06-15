import React, { useContext } from 'react'
import { CounterContext } from '../App'

function GrandChild() {
    const context = useContext(CounterContext)
  return (
    <div>
        Count From Grand Child - {context.count}
      <button onClick={()=>context.dispatch("increment")}>Increment</button>
      <button onClick={()=>context.dispatch("decrement")}>Decrement</button>
      <button onClick={()=>context.dispatch("reset")}>Reset</button>
    </div>
  )
}

export default GrandChild
