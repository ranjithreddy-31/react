import React, {useState} from 'react'


const initialState = {fname:'Ranjith', lname:'Gaddam'}
const ObjectUseState = () => {

    const [obj, setObj] = useState(initialState)
    

    const changeName = () =>{

        // obj.fname = "Ranjith Reddy"
        // obj.lname = "gaddam"
        // setObj(obj)

        const newObj = {...obj, fname:"Ranjith Reddy", lname:"G"}
        setObj(newObj)
    }

    console.log('ObjectUseState render')
  return (
    <div>
      <button onClick={changeName}>{obj.fname} {obj.lname}</button>
    </div>
  )
}

export default ObjectUseState
