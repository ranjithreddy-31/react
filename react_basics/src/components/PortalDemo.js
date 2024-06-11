import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo() {
    
  return ReactDOM.createPortal (
    <h1>Portal Demo</h1>, 
    document.getElementById('portal-demo-root')
  )
}

export default PortalDemo
