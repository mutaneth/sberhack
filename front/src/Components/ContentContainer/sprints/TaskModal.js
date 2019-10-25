import React, {useState, useEffect, useContext} from 'react';
import play from "../../../images/hui.png";
import bb from "../../../images/bb.png";
import j from "../../../images/j.png";
import con from "../../../images/con.png";

import {TimerContext} from "../../../contexts/TimerContext";

const TaskModal = (props) => {
    const {timerActive, setTimerActive} = useContext(TimerContext);
    const handleStartTask = () => {
        setTimerActive(!timerActive);
        // setModalIsOpen(false);
    };
const {task, setModalIsOpen} = props;
    return (
        <div className={'TaskModalContainer'}>
            <div className={'TaskModalContainer-Header'}>
                <div className={'TaskModalContainer-Header-TitleContainer'}>
                    <h1 className={'TaskModalContainer-Header-Text'}>{task.name} </h1>
                    <p>Помидоры: 4</p>
                </div>
                <img
                    className={'ProjectList-ProjectCard-Content-TaskContainer-PlayButton'}
                   onClick={handleStartTask}
                    src={play} alt={'play_timer'}/>
            </div>
            <div>
                <p>
{task.description}
                </p>
            </div>
            <div className={'TaskModalContainer-IconsContainer'}>
                <div className={'TaskModalContainer-IconsContainer-Icons'}>
                    <img src={bb} alt={'bb'}/>
                    <img src={j} alt={'j'}/>
                    <img src={con} alt={'con'}/>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;