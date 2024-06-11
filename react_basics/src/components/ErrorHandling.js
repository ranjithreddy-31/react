import React from 'react'

function ErrorHandling({name}) {
    if (name == "Joker"){
        throw new Error("Not a Hero")
    }
  return (
    <div>
      <h1>name</h1>
    </div>
  )
}

export default ErrorHandling
