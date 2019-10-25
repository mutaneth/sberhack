import React, { useState, createContext } from 'react';

export const  LoginContext = createContext();

const LoginContextProvider = (props) => {
    const { children,  timerActive, setTimerActive } = props;
    return (
        <LoginContext.Provider value={{
            timerActive, setTimerActive
        }}
        >
            { children }
        </LoginContext.Provider>
    );
};
export default LoginContextProvider;