import React, {useState, useEffect, useContext} from 'react';
import Timer from "./Timer";
import play from '../../images/hui.png'
import {TimerContext} from "../../contexts/TimerContext";
import taskList from './tasksList';

export default function InfoPanel (props) {
    const [minutes, setMinutes] = useState(0);
    // const [seconds, setSeconds] = useState(25);
    const {setSeconds, seconds} = useContext(TimerContext);


    const {actualInfoByBoards, allBoards} = props;


    const {timerActive, setTimerActive} = useContext(TimerContext);
    // const [timerActive, setTimerActive] = useState(false);
    const [secondsDelay, setSecondsDelay] = useState(null);
    const [taskListVisible, setTaskListVisible] = useState(false);
    const [taskTitle, setTaskTitle] = useState('Задача');

    const tasks = taskList.map(item => {
       return(
           <h3 key={item.id} onClick={() => {
               setTaskTitle(item.name);
               setTaskListVisible(false);
               setSeconds(10);
           }} >
               { item.name }
       </h3>)
    });
    useEffect(() => {
        timerActive ? setSecondsDelay(1000) : setSecondsDelay(null)
    }, [timerActive]);
    return (
        <div className='InfoPanel'>
            <div className='InfoPanel-Container'>
                <div className={'InfoPanel-Container-Item'}
                    onClick={() => {
                        setTaskListVisible(!taskListVisible);
                    }}
                >
                    { taskListVisible ?
                        <div>
                        <div className={'InfoPanel-TaskList-Triangle'}>

                        </div>
                        <div className={'InfoPanel-TaskList'}>
                            {tasks}
                        </div>
                        </div>
                        :
                        null}
                    <h1>{taskTitle}</h1>

                </div>
                <div className={'InfoPanel-Container-Item'}>
                    <Timer
                        minutes={minutes} setMinutes={setMinutes}
                        seconds={seconds} setSeconds={setSeconds}
                        setTimerActive={setTimerActive}
                        secondsDelay={secondsDelay} setSecondsDelay={setSecondsDelay}
                    />
                </div>
                <div className={'InfoPanel-Container-Item'}>
                <img className={'InfoPanel-PlayButton'}

                     onClick={() => {
                         if (seconds === 0 && minutes === 0) {
                             setMinutes(25);
                             setSeconds(0);
                             setTimerActive(true);
                             setSecondsDelay(1000);
                         } else {
                             setTimerActive(!timerActive);
                         }
                     }}

                     src={play} alt={'play_timer'}/>
                </div>
            </div>
        </div>
    );
}