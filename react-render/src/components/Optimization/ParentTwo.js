import React, {useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo'

const ParentTwo = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('ranjithj')
    console.log('ParentTwo Render')
  return (
    <div>
        <h1>Count:{count}</h1>
      <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
      <button onClick={()=>setName("Ranjith Reddy")}>Change Name</button>
      <MemoizedChildTwo name={name}></MemoizedChildTwo>
    </div>
  )
}

export default ParentTwo
