/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';


export const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      let alwaysParagraph = document.getElementById('updatesEverytime') as HTMLElement;
      if(alwaysParagraph) {
          alwaysParagraph.innerHTML = `You clicked ${count} times`
      }
    });

    // Add an empty array of dependencies to the end of useEffect will execute it only once
    useEffect(() => {
       let onceParagraph = document.getElementById('updatedOnce') as HTMLElement | null;
       if(onceParagraph) {
        onceParagraph.innerHTML = `This is only executed ${count+1} time`
       }
    }, [])

    // Similar to componentDidUnmount
   useEffect(() => {
    return () => console.log("Teardown function! aka component is unmounting 😃");
   }, [])

    let content = (
        <div>
          <p id="updatedOnce"></p>
          <p id="updatesEverytime"></p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <br/>
          <br/>
          <img src="" alt=""/>
        </div>
      );
 
    return content;
}