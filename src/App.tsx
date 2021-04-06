import React, { useState } from 'react';
import './App.css';
import { Hook } from "./Hook";
import useStateImage from './images/useState.png';
import useEffect from './images/useEffect.png';
import useContextImage from './images/useContext.png';
import useRefImage from './images/useRef.png';
import useReducerImage from './images/useReducer.png'
import customHookImage from './images/customHook.png'
import reactBeforeAfterImage from './images/reactbeforeafter.png'
import rules from './images/rules.png';
import references from './images/references.png';
import tree from './images/tree.png';
import wrapperhell from './images/wrapperhell.png';
import { UseStateHook } from './hooks/UseStateHook';
import { UseEffectHook } from './hooks/UseEffectHook';
import { UseContextHook } from './hooks/UseContextHook';
import { UseRefHook } from './hooks/UseRefHook';
import { UseReducerHook } from './hooks/UseReducerHook';
import { CustomHook } from './hooks/CustomHook';
import classEvents from './images/classEvents.png';
import { TitleComponent } from './hooks/TitleComponent';

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
          
          <ul className="titleSlide">
            <TitleComponent title="🪝🎣"></TitleComponent>
          </ul>
        </div>
        <Hook title="Why 🤔" image={reactBeforeAfterImage}>
          <div>
            <p>
              <b>You had to</b> build a React.Component class: boilerplate code, complexity <br/>
              But even worse was the tree of html elements/components you would get. <br/>
              <b>Result:</b> 🕵🏻‍♂️🪲
            </p>
            <div>
              <img src={tree} alt=""/>
            </div>
            <img src={wrapperhell} alt=""/>
            <p> You can now use all of the react features without the added complexity of classes by using hooks</p>
            <p> Reusing a small component with hooks is easier than using a big class </p>
          </div>
        </Hook>
        <Hook title="Rules of hooks 👮🏻‍♀️" image={rules}/>
        <Hook title="useState()" image={useStateImage}>
          <UseStateHook></UseStateHook>
        </Hook>
        <Hook title="useEffect()" image={classEvents}>
          <img src={useEffect} alt=""/>
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

        <Hook title="useDebugValue() + CustomHooks" image={customHookImage}>
          <CustomHook initialValue={50}></CustomHook>
        </Hook> 

        <Hook title="References 📚" image={references}>
          <a href="https://reactjs.org/docs/hooks-intro.html"> Reacts Intro Official </a> <br/><br/>
          <a href="https://fullstackopen.com/">Helsinki Fullstack Open</a><br/><br/>
          <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA">Fireship.io</a><br/><br/>
          <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w">Academind</a><br/><br/>
          <a href="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw">Ben Awad</a><br/><br/>

          <p>Check the repo to play around with hooks <br/> https://github.com/jesus-rod/react-hooks-kata </p>
        </Hook>
      </header>
    </div>
  );
}

export default App;
