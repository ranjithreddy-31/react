import React, { useState } from 'react'
import userInput from './hooks/userInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = userInput('')
    const [lastName, bindLastName, resetLastName] = userInput('')
    
    const submitHandler = (e) =>{
        e.preventDefault();
        alert(`Your name is ${firstName}, ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type="text" {...bindFirstName}></input>
        <input type="text" {...bindLastName}></input> 
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm
