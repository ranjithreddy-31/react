import React, {useState, useEffect} from 'react'

export default function HookTimer() {
    const [count,setCount] = useState(0)
    const tick = () =>{
        setCount(prevCount=>prevCount+1)
    }
    //The below useEffect runs only once and calls setIntervel function which runs for every 1 sec
    
    useEffect(
        () => {
            const interval = setInterval(tick, 1000);
            return () => {
                clearInterval(interval)
            }
        },
        []
    )
    
  return (
    <div>
        <h1>Hook Timer: {count}</h1>
    </div>
  )
}
