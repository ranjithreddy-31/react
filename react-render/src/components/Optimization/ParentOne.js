import React, {useState} from 'react'

const ParentOne = (props) => {
    const [count, setCount] = useState(0)
    console.log('ParentOne Render')
  return (
    <div>
        <h1>Count:{count}</h1>
      <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
      {props.children}
    </div>
  )
}

export default ParentOne
