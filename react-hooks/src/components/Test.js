import React, { useState, useEffect } from 'react';

function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, []); // Effect runs only when `count` changes

  const temp = () =>{
    console.log("This is a temporary function")
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={ temp }></button>
    </div>
  );
}

export default Test;
