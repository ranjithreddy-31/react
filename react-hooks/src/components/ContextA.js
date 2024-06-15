import React from 'react'
import ContextB from './ContextB'
export const AgeContext = React.createContext()
function ContextA() {
  return (
    <div>
      <h1> This is Context A</h1>
      <AgeContext.Provider value={24}>
      <ContextB></ContextB>
      </AgeContext.Provider>
    </div>
  )
}

export default ContextA
