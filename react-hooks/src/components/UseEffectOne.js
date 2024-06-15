import React,{useState, useEffect} from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(
      ()=>{
        console.log('Updating Document title')
        document.title = `You clicked ${count} times` 
      }, [count]
    )
// useEffect Sytanx
//     useEffect(() => {
//   Side effect code here
//   return () => {
//     Cleanup code here (optional)
//   };
// }, [dependencies]);


    const incrementCount = () =>{
        setCount(
            (count)=>{
                return count+1
            }
        )
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
  return (
    <div>
      <input type='text' value={name} onChange={handleName}></input>
      <button onClick={incrementCount}>Count {count}</button>
    </div>
  )
}

export default UseEffectOne
