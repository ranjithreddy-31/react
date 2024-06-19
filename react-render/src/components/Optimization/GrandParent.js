import React, { useState } from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

const GrandParent = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <button onClick={()=>{setCount((count)=>{return count+1})}}>Grand Parent Count: {count}</button>
      <ParentOne newCount={count}>
        <ChildOne></ChildOne>
      </ParentOne>
    </div>
  )
}

export default GrandParent
