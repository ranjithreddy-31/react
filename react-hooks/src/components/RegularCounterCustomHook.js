import React, { useState,useEffect } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function RegularCounterCustomHook() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
    </div>
  )
}

export default RegularCounterCustomHook
