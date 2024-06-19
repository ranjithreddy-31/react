import React from 'react'
import { useState } from 'react'
import useCounter from './hooks/useCounter'

function RegularCounter() {

    const [count, incerement, decrement, reset] = useCounter(useState(0))
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={incerement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default RegularCounter
