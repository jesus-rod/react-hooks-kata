import React, { useDebugValue, useEffect, useState } from 'react'

interface CustomHookProps {
    initialValue: number;
}

// Must start with use
function useTenMultiplier(initialValue: number): number {
    const [outputNumber, setState] = useState(0);

    useEffect(() => {
        setState(initialValue * 10);
    }, [])

    useDebugValue(initialValue > 100 ? 'More than 100' : 'Less than 100')
    return outputNumber
}

export const CustomHook: React.FC<CustomHookProps> = ({ initialValue }) => {
    return (
        <div>
            <p> The state is {useTenMultiplier(initialValue)} </p>
        </div>
    );
}