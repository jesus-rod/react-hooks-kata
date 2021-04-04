import React, { useRef } from 'react'

export const UseRefHook = () => {

    const textToChange = useRef<HTMLParagraphElement>(null);

    const updateText = () => {
        if (textToChange.current) {
            textToChange.current.innerText = "The value has changed 🐣"
        }
    }

    return (
       <p ref={textToChange} onMouseOver={updateText}> Initial value 🥚 </p> 
    );
}