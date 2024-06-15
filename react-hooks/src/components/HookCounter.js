import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {setCount(count+1)}
  return (
    <div>
        <h1>Counter using Hooks</h1>
        <h4>current count is {count}</h4>
      <button onClick={incrementCount}>Click to Increment</button>
    </div>
  )
}

export default HookCounter
