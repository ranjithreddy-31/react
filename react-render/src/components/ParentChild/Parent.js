import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)
    console.log('Parent Render')
  return (
    <div>
        <h1>Count:{count}</h1>
      <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
      <Child></Child>
    </div>
  )
}

export default Parent
