import React, {useState, useEffect, useContext} from 'react';
import {Button} from "semantic-ui-react";


const SberCatDialog = (props) => {
    const [feedBackRatingConcentration, setFeedBackRatingConcentration] = useState(0);
    const [feedBackRatingProductivity, setFeedBackRatingProductivity] = useState(0);
    const [feedBackRatingDisturb, setFeedBackRatingDisturb] = useState(0);
    const {setCatActive, catStatus, setSeconds, setCatStatus, setAnimateLevelValueStyle, setTimerActive} = props;
    const [isComplete, setIsComplete] = useState(false);
        return (
            <div className={'SberCat-Cat-Dialog-Content-Screen'}>
                {!isComplete && catStatus === 'work' ?
                <div className={'SberCat-Cat-Dialog-Content-Feedback'}>
                    <h2>Вы успели выполнить задачу?</h2>
                    <Button onClick={() => setIsComplete(true)} color={'green'}>Да</Button>
                    <Button onClick={(e) => {
                        e.stopPropagation();
                        setCatActive(false);
                    }} color={'red'}>Нет</Button>
                </div> : null}
                {catStatus === 'work' && isComplete ?
                    <div className={'SberCat-Cat-Dialog-Content-Feedback'}>
                        <div><h2>Оцените концентрацию:</h2>
                            <input type='range' value={feedBackRatingConcentration}  min={0} max={5} onChange={(e) => setFeedBackRatingConcentration(e.target.value)}/>
                        </div>
                        <div> <h2>Оцените как часто вас отвлекали:</h2>
                            <input type='range' value={feedBackRatingDisturb}  min={0} max={5} onChange={(e) => setFeedBackRatingDisturb(e.target.value)} />
                        </div>
                        <div><h2>Оцените продуктивность:</h2>
                            <input type='range' value={feedBackRatingProductivity}  min={0} max={5} onChange={(e) => setFeedBackRatingProductivity(e.target.value)} />
                        </div>
                        <h3 style={{padding: '20px', textAlign: 'center'}}>Отлично поработали!!! За выполненную задачу вы получили +300ХР! Теперь вам доступны новые покупки в магазине! А сейчас можно сделать перерыв!</h3>
                        <Button onClick={(e) => {
                            e.stopPropagation();
                            setCatActive(false);
                            setSeconds(5);
                            setCatStatus('chill');
                            setAnimateLevelValueStyle('SberCat-Level-Animate-Value');
                            setTimerActive(true);
                        }}>Отдохнуть</Button>
                    </div> : null} {
                catStatus === 'chill'? <div>
                        <h4>Перерыв окончен! Можно снова приступать к работе!</h4>
                        <Button onClick={(e) => {
                            e.stopPropagation();
                            setCatStatus('work');
                            setCatActive(false);
                        }}>Хорошо!</Button>
                    </div> : null}

            </div>
        );
}

export default SberCatDialog;