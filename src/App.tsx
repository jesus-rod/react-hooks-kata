import React, { useState } from 'react';
import './App.css';
import { Hook } from "./Hook";
import useStateImage from './images/useState.png';
import useContextImage from './images/useContext.png';
import useRefImage from './images/useRef.png';
import useReducerImage from './images/useReducer.png'
import rules from './images/rules.png';
import references from './images/references.png';
import tree from './images/tree.png';
import wrapperhell from './images/wrapperhell.png';
import { UseStateHook } from './hooks/UseStateHook';
import { UseEffectHook } from './hooks/UseEffectHook';
import { UseContextHook } from './hooks/UseContextHook';
import { UseRefHook } from './hooks/UseRefHook';
import { UseReducerHook } from './hooks/UseReducerHook';
import classEvents from './images/classEvents.png';

function App() {
  const [destroyed, setDestroyed] = useState(false);

  // unmount useEffect component from parent component (good practice)
  let useEffectContent = (<div>
    <UseEffectHook></UseEffectHook>
    <button onClick={() => setDestroyed(true)}>
      Destroy this component
    </button>
    </div>)

  if (destroyed) {
    useEffectContent = <h1>Component destroyed! 💥💥</h1>
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1> Hooks I did it again 🪝🎣 </h1>
          <ul className="firstSlide">
            <li>Why?</li>
            <li>Rules of hooks</li>
            <li>useState()</li>
            <li>useEffect()</li>
            <li>useContext()</li>
            <li>useRef()</li>
            <li>useReducer()</li>
            <li>userDebugValue() + CustomHooks</li>
          </ul>
        </div>
        <Hook title="Why 🤔" image={tree}>
          <ol>
            <li><b>You had to</b> build a React.Component class to manage state </li>
            <li>This was annoying because it resulted in boilerplate code </li>
            <li>But even worse was the tree of html elements/components you would get. Try DevConsole inspect now</li>
            <li><b>Result:</b> debugging was annoying 🕵🏻‍♂️🪲</li>
          </ol>
          <img src={wrapperhell} alt=""/>
        </Hook>
        <Hook title="Rules of hooks 👮🏻‍♀️" image={rules}/>
        <Hook title="useState()" image={useStateImage}>
          <UseStateHook></UseStateHook>
        </Hook>
        <Hook title="useEffect()" image={classEvents}>
          {useEffectContent}
        </Hook>

        <Hook title="useContext()" image={useContextImage}>
          <UseContextHook></UseContextHook>  
        </Hook>

        <Hook title="useRef()" image={useRefImage}>
          <UseRefHook></UseRefHook> 
        </Hook>

        <Hook title="useReducer()" image={useReducerImage}>
          <UseReducerHook></UseReducerHook>
        </Hook>

        <Hook title="useDebugValue() + CustomHooks" image={classEvents}>
        </Hook>

        <Hook title="References 📚" image={references}>
          <a href="https://reactjs.org/docs/hooks-intro.html"> Reacts Intro Official </a> <br/><br/>
          <a href="https://fullstackopen.com/">Helsinki Fullstack Open</a><br/><br/>
          <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA">Fireship.io</a><br/><br/>
          <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w">Academind</a><br/><br/>
          <a href="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw">Ben Awad</a><br/><br/>
        </Hook>
      </header>
    </div>
  );
}

export default App;
