import React, { useState, useCallback } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {

    const [age,setAge] = useState(24);
    const [salary, setSalary] = useState(0);

    const incrementAge = useCallback(() =>{
        setAge(age+1);
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary+5000);
    },[salary])
    
  return (
    <div>
      <Title></Title>
      <Count count={age}>Age</Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count count={salary}>Salary</Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
