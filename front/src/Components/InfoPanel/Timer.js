import React, { useState, useContext } from 'react';
import useInterval from '@use-it/interval';
import {CatContext} from "../../contexts/CatContext";

const Timer = (props) => {
    const {  catActive, setCatActive, activeCatMenu, setActiveCatMenu} = useContext(CatContext);
    const {seconds, minutes, setSeconds, setMinutes, secondsDelay, setSecondsDelay, setTimerActive} = props;
    useInterval(() => {
        if (seconds === 0) {
            if (minutes > 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            } else if (minutes === 0) {
                setSecondsDelay(null);
                setTimerActive(false);
                setCatActive(true);
                setActiveCatMenu('1');
            }
        } else {
            setSeconds(seconds - 1)
        }
    }, secondsDelay);

    return (
        <div>
            <h1 className={'InfoPanel-Container-Timer-Text'}>
                {
                    minutes.toString().length < 2 ?
                        '0' + minutes
                        : minutes
                } : {
                seconds.toString().length < 2 ?
                '0' + seconds : seconds
            }</h1>
        </div>
    );
};

export default Timer;