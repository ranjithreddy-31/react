import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorHandling from './components/ErrorHandling';
// import ParentComp from './components/ParentComp';
//import ParentComp from './components/ParentComp';
// import Refs from './components/Refs';
// import Table from './components/Table';
//import Greet from './components/greet';
// import { GM } from './components/greet';
// import Welcome from './components/Welcome';
// import { Hello } from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import ParentComponent from './components/ParentComponent';
// import ConditionalRendering from './components/ConditionalRendering';
// import ListRendering from './components/ListRendering';
// import StyleSheet from './components/StyleSheet';
 // import Form from './components/Form';
//import InlineCSS from './components/InlineCSS';
// import Mounting from './components/Mounting';
// import Updating from './components/Updating';
// import { Fragment } from 'react';
// import PureComp from './components/PureComp';
// import FocusInput from './components/focusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <GM/>
        <Welcome name="Ranjith Reddy">
        <p>This is paragraph tag inside a class component</p>
          </Welcome>
        <Hello name="Ranjith Reddy" message="Morning">
          <p>This is paragraph tag inside a functional component</p>
        </Hello>
        <Message></Message>
        <Counter></Counter>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <ClassClick></ClassClick>  */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <ConditionalRendering></ConditionalRendering> */}
         {/* <ListRendering></ListRendering>  */}
         {/* <StyleSheet useCss={true}></StyleSheet> */}
         {/* <InlineCSS></InlineCSS> */}
        {/* <Form></Form> */}
        {/* <Mounting/> */}
        {/* <Updating></Updating> */}
        {/* <Fragment></Fragment> */}
        {/* <Table></Table> */}
        {/* <PureComp></PureComp> */}
        {/* <ParentComp></ParentComp> */}
        {/* <Refs></Refs> */}
       {/* <FocusInput></FocusInput> */}
       {/* <FRParentInput></FRParentInput> */}
       {/* <PortalDemo></PortalDemo> */}
       <ErrorBoundary>
        <ErrorHandling name="ranjith"></ErrorHandling>
        <ErrorHandling name="Joker"></ErrorHandling>
       </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
