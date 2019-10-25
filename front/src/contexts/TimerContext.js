import React, { useState, createContext } from 'react';

export const TimerContext = createContext();

const TimerContextProvider = (props) => {
    const {children, timerActive, setTimerActive,seconds, setSeconds} = props;
    return (
        <TimerContext.Provider value={{
            timerActive, setTimerActive, seconds, setSeconds
        }}>
            {children}
        </TimerContext.Provider>
    );
};
export default TimerContextProvider;