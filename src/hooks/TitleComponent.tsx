import React, { useRef } from 'react'

interface TitleComponentProps {
    title: string
}

export const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
    const titleToChange = useRef<HTMLHeadingElement>(null);

    const updateTextFinal = () => {
        setTimeout(() =>{
            if (titleToChange.current) {
                titleToChange.current.innerText = "Hooks" 
            }      
        }, 2000)
    }

    const updateText = () => {
        setTimeout(() =>{
            if (titleToChange.current) {
                titleToChange.current.innerText = "🧨" 
                updateTextFinal()
            }      
        }, 300)
        
    }

    return (
        <h1 ref={titleToChange} onMouseOver={updateText}> {title} </h1> 
    );
}