import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(0)

    const incrementCount = () =>{
        setCount(
            (prevCount) => prevCount+1 
        )
    }

    const decrementCount = () =>{
        setCount(
            (prevCount) => prevCount-1 
        )
    }

    const resetCount = () =>{
        setCount(initialCount)
    }

  return (
    <div>
      Count: {count}
      <button onClick={ incrementCount }>Increment</button>
      <button onClick={ decrementCount }>Decrement</button>
      <button onClick={ resetCount }>Reset</button>
    </div> 
  )
}

export default HookCounterTwo
