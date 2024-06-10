import React from 'react'
import Person from './Person';

function ListRendering() {
    let names = ["Ranjith", "Sai", "Arun"]
    names = names.map((name, index)=>{return <Person key={index} name={name}/>});
    //names = names.map((name,index)=>{return <h1 key={index}>{name}</h1>})
  return (
    <div>
      {names}
    </div>
  )
}

export default ListRendering
