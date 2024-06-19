import {useState} from 'react'

function useCounter(props) {

    const [count,setCount] = props
    
    const incerement = () =>{setCount(count+1)}
    const decrement = () =>{setCount(count-1)}
    const reset = () =>{setCount(0)}

    return [count, incerement, decrement, reset]

}

export default useCounter
