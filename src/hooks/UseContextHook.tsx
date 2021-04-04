import React, { createContext, useContext } from 'react'

const dealers = {
    topDealer: '🚀 Autos Munich',
    badDealer: '💩 Autos Berlin'
}

const DealerContext: React.Context<string> = createContext("")

export const UseContextHook = () => {
        return (
            <DealerContext.Provider value={dealers.topDealer}>
                <SubComponent />
            </DealerContext.Provider>
        );
}

export const SubComponent = () => {
    const dealer = useContext(DealerContext);
    return <p> {dealer} </p>
}