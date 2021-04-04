import React, { useReducer } from 'react'

type Actions = 
    | { type: "take"}
    | { type: "return"}

const CookieReducer = (cookieCount: number, action: Actions) => {
    switch (action.type) {
        case 'take':
            return cookieCount + 1;
        case 'return':
            return cookieCount - 1;
        default:
            return cookieCount
    }
}

export const UseReducerHook: React.FC = () => {
    
    const [cookieCount, dispatch] = useReducer(CookieReducer, 0)
    return (
        <div>
            <p>Ate this many cookies {cookieCount}</p>
            <button onClick={() => dispatch({type: 'take'})}>Take</button> &nbsp;&nbsp;
            <button onClick={() => dispatch({type: 'return'})}> Return</button>
        </div>
    );
}