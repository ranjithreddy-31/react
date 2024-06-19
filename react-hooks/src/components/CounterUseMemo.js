import React, { useMemo, useState } from 'react'

function CounterUseMemo() {

    const [countOne, setCountOne] = useState(0) 
    const [countTwo, setCountTwo] = useState(0) 

    const incrementOne = () => {
        setCountOne(countOne+1);
    }

    const incrementTwo = () =>{
        setCountTwo(countTwo+1)
    }

    const isEven = useMemo(() =>{
        let i=0;
        while(i<200000000){
            i++;
        }
        return countOne%2 == 0;
    },[countOne])

  return (
    <div>
        <button onClick={incrementOne}>Count One - {countOne}</button>
        <span>{ isEven? "Even":"Odd"}</span>
        <br></br>
        <button onClick={incrementTwo}>Count Two - {countTwo}</button>
    </div>
  )
}

export default CounterUseMemo
