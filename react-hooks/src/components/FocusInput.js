import React, { createRef, useEffect, useRef } from 'react'

function FocusInput() {
const inputref=  useRef(null)
    useEffect(
        ()=>{inputref.current.focus()},
        []  
    )
  return (
    <div>
      <input ref={inputref} type="text"></input>
    </div>
  )
}

export default FocusInput
