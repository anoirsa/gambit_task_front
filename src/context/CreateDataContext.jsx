import React from 'react';


export default (actions) => {
    const Context = React.createContext();
    const Provider = ({children}) => {
        let arrayTop = {};
        for (let key in actions) {
            arrayTop[key] = actions[key]
        }
        return (
            <Context.Provider 
                value={{...actions}}
            >
                {children}
            </Context.Provider>
        )
    }


    return {Provider, Context}
} 