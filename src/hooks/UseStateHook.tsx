import React, { useState } from 'react'


export const UseStateHook = () => {
    const [count, setCount] = useState(0)
        return (
            <div>
                <p>
                    I ate {count} 🍪
                </p>

                <button onClick={() => setCount(count + 1)}>
                    Steal Cookie
                </button>

                
            </div>
        );
}