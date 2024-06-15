import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { CounterContext } from '../App'

function Child() {
    const context = useContext(CounterContext)
  return (
    <div>
      Count From Child - {context.count}
      <button onClick={()=>context.dispatch("increment")}>Increment</button>
      <button onClick={()=>context.dispatch("decrement")}>Decrement</button>
      <button onClick={()=>context.dispatch("reset")}>Reset</button>
      <GrandChild></GrandChild>
    </div>
  )
}

export default Child
