import React from 'react';
import { UserContext } from '../App';
import { AgeContext } from './ContextA';
import { useContext } from 'react';

function ContextC() {
    const user = useContext(UserContext)
    const age = useContext(AgeContext)
  return (
    // <div>
    //   <UserContext.Consumer>
    //     {name => (
    //       <AgeContext.Consumer>
    //         {age => <h1>Hello {name} This is Context C. Age: {age}</h1>}
    //       </AgeContext.Consumer>
    //     )}
    //   </UserContext.Consumer>
    // </div>
    <div>
         <h1>Hello {user} This is Context C using Hooks. Age: {age}</h1>
    </div>
  );
}

export default ContextC;
