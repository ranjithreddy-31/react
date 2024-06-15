import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <form>
                <input
                 type='text' 
                 name="firstName" 
                 value={name.firstName} 
                 onChange={(e)=>{setName({...name, firstName:e.target.value})}}>
                </input>

                <input type='text'
                name="lastName"
                value={name.lastName} 
                onChange={(e)=>{setName({...name, lastName:e.target.value})}}>
                </input>
                <h1>Your First Name is {name.firstName}</h1>
                <h1>Your Last Name is {name.lastName}</h1>
            </form>
        </div>
    )
}

export default HookCounterThree
