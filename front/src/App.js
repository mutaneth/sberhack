import React, {useState, useEffect} from 'react';

import MenuBar from "./Components/MenuBar/MenuBar";
import InfoPanel from "./Components/InfoPanel/InfoPanel";
import ContentContainer from "./Components/ContentContainer/ContentContainer";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SberCat from "./Components/SberCat/SberCat";
import CatContextProvider from "./contexts/CatContext";
import TimerContextProvider from "./contexts/TimerContext";
import LoginContextProvider from "./contexts/LoginContext";
import url from "./url";

function App() {

const [leftSideActiveItem, setLeftSideActiveItem] = useState('');
const [isAuth, setIsAuth] = useState(true);
    const [timerActive, setTimerActive] = useState(false);
    const [catActive, setCatActive] = useState(false);
    const [secret, setSecret] = useState(localStorage.getItem('secret'));
    const [normToken, setNormToken] = useState(localStorage.getItem('normToken'));
    const [allBoards, setAllBoards] = useState([]);
    const [actualInfoByBoards, setActualInfoByBoards] = useState([]);
    const [dataIsLoaded, setDataIsloaded] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const [catStatus, setCatStatus] = useState('work');
    const handleSprintsData = async () => {
        try {
            await axios(url.prefix + 'boards/getBoards',  {
                params: {
                    secret,
                    token: normToken
                    }
                }
            ).then(res => {
                setAllBoards(res.data.boards);
                return axios.all(res.data.boards.map(l => axios.get(url.prefix + 'boards/getActualInfoByBoard',{
                    params: {
                        boardId: l.id,
                        secret,
                        token: normToken
                    }
                })))
                    .then(axios.spread(function (...res) {
                        const newArr = res.map(item => item.data);
                    setActualInfoByBoards(newArr);
                    }));
                });
        } catch (e) {
        console.error(e);
        }
    };

    useEffect(() => {
        handleSprintsData().then(() => {
            console.log('ответ получен');
            setDataIsloaded(true);
        });
    }, [isAuth]);

    return (<Router>
            {!isAuth ?
                <Login isAuth={isAuth} setIsAuth={setIsAuth} setSecret={setSecret} setNormToken={setNormToken}/>
                : null }
                {dataIsLoaded ?
                    <LoginContextProvider secret={secret} normToken={normToken}>
                <CatContextProvider catStatus={catStatus} setCatStatus={setCatStatus} catActive={catActive} setCatActive={setCatActive}>
                    <TimerContextProvider seconds={seconds} setSeconds={setSeconds} timerActive={timerActive} setTimerActive={setTimerActive}>
                        <div className="App">
                            <MenuBar secret={secret} token={normToken} leftSideActiveItem={leftSideActiveItem}
                                     setLeftSideActiveItem={setLeftSideActiveItem}/>
                            <InfoPanel actualInfoByBoards={actualInfoByBoards} allBoards={allBoards}/>
                            <ContentContainer allBoards={allBoards} actualInfoByBoards={actualInfoByBoards}/>
                            <SberCat/>
                        </div>

                    </TimerContextProvider>
                </CatContextProvider>
            </LoginContextProvider> : null
            }
        </Router>
    );
}

export default App;
