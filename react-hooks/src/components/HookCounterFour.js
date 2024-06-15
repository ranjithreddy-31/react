import React,{useState} from 'react'

function HookCounterFour() {

    const [items, setItems] = useState([])
    const addItem = () =>{
        setItems(
            (prevItems) => {return [...items, {id:items.length, value: Math.floor(Math.random()*10)+1}]}
        )
    }
  return (
    <div>
        <button onClick={addItem}>Add an Item</button>
      <ul>
            {items.map((item)=>{ return <li key={items.id}>{item.value}</li>})}
            
      </ul>
    </div>
  )
}

export default HookCounterFour
