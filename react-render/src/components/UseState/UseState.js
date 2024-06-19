import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    console.log('UseState Render')
  return (
    <div>
        <h1>Count:{count}</h1>
      <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
    </div>
  )
}

export default UseState
