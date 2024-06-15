import './App.css';
// import ContextA from './components/ContextA';
import React, { useReducer } from 'react';
// import CounterTwo from './components/CounterTwo';
// import Parent from './components/Parent';
import DataFetchUsingUseState from './components/DataFetchUsingUseState';
import DataFetchUsingUseReducer from './components/DataFetchUsingUseReducer';
import FetchPostByID from './components/FetchPostByID';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import CounterOne from './components/CounterOne';
// import UseReducerComplex from './components/UseReducerComplex';
// import DataFetch from './components/DataFetch';
// import FetchPostByID from './components/FetchPostByID';
// import ClassTimer from './components/ClassTimer';
// import HookTimer from './components/HookTimer';
// import MouseContainer from './components/MouseContainer';
// import HookMouse from './components/HookMouse';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import UseEffectOne from  './components/UseEffectOne'

// export const UserContext = React.createContext();

export const CounterContext = React.createContext();

const initisalState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initisalState
        default:
            return state
    }
    
}
function App() {
  // const [count, dispatch] = useReducer(reducer, initisalState)
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter></ClassCounter>
        <HookCounter></HookCounter>
        <HookCounterTwo></HookCounterTwo>
        <HookCounterThree></HookCounterThree>
        <HookCounterFour></HookCounterFour>
        <UseEffectOne></UseEffectOne>
        <HookMouse></HookMouse> 
        <MouseContainer></MouseContainer>
        <ClassTimer></ClassTimer>
        <HookTimer></HookTimer>
        <DataFetch></DataFetch>
        <FetchPostByID></FetchPostByID>
        <UserContext.Provider value={"Ranjith"}>
        <ContextA></ContextA>
        </UserContext.Provider>
        <CounterOne></CounterOne>
        <UseReducerComplex></UseReducerComplex>
        <CounterTwo></CounterTwo>
        <CounterContext.Provider value={{count:count, dispatch:dispatch}}>
        <Parent></Parent>
        </CounterContext.Provider>
        <DataFetchUsingUseState></DataFetchUsingUseState>*/}
        {/* <DataFetchUsingUseReducer></DataFetchUsingUseReducer> */}
        <FetchPostByID></FetchPostByID>
      </header>
    </div>
  );
}

export default App;
