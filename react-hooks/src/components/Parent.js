import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../App'
import Child from './Child'

function Parent() {
    const context = useContext(CounterContext)
    return (
      <div>
        Count From Parent - {context.count}
        <button onClick={()=>context.dispatch("increment")}>Increment</button>
        <button onClick={()=>context.dispatch("decrement")}>Decrement</button>
        <button onClick={()=>context.dispatch("reset")}>Reset</button>
        <Child></Child>
      </div>
    )
}

export default Parent
