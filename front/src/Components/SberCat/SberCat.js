import React, {useState, useEffect, useContext} from 'react';
import like from  '../../images/Like.png';
import sberCat from '../../images/sbercat.png';
import {Button, Menu, Rating} from 'semantic-ui-react';
import {CatContext} from "../../contexts/CatContext";
import {TimerContext} from "../../contexts/TimerContext";
import SberCatDialog from './SberCatDialog';

const SberCat = ()  => {
    // const [catActive, setCatActive] = useState(false);
    const { catActive, setCatActive, activeCatMenu, setActiveCatMenu, setCatStatus, catStatus} = useContext(CatContext);
    const [animateCatContainerStyle, setAnimateCatContainerStyle] = useState('');
    const [animateLevelStyle, setAnimateLevelStyle] = useState('');
    const {timerActive, setTimerActive, setSeconds, seconds} = useContext(TimerContext);
    // const [activeCatMenu, setActiveCatMenu] = useState('');
    const [animateLevelValueStyle, setAnimateLevelValueStyle] = useState('');
    const [animateLevelValue, setAnimateLevelValue] = useState('12');

    useEffect(() => {
        if (animateLevelValueStyle === 'SberCat-Level-Animate-Value') {
            const timer = setTimeout(() => {
                setAnimateLevelValueStyle('');
                setAnimateLevelValue('13');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [animateLevelValueStyle]);
    const handleItemClick = (e, { name }) => setActiveCatMenu(name);
    useEffect(() => {
        if (catActive) {
            setAnimateLevelStyle('SberCat-Level-Animate');
            setAnimateCatContainerStyle('SberCat-Container-Animate');
        } else {
            setAnimateLevelStyle('');
            setAnimateCatContainerStyle('');
        }
        if (!catActive && animateCatContainerStyle === 'SberCat-Container-Animate') {
            setAnimateLevelStyle('SberCat-Level-Animate-Reverse');
            setAnimateCatContainerStyle('SberCat-Container-Animate-Reverse');
        }
    }, [catActive]);


    return (
        <div className={`SberCat-Container ${animateCatContainerStyle}`}  onClick={(e) => {
            e.stopPropagation();
            setCatActive(true);
        }}>
            <div className={`SberCat-MessageContainer ${animateLevelStyle} `}>
                <h2 className={`SberCat-MessageContainer-Text ${animateLevelValueStyle}`}>{animateLevelValue}</h2>
            </div>
            {
                catActive ?
                    <div>
                    <img className={'SberCat-Cat-Image'} src={sberCat} alt={'sberCatImg'}  onClick={(e) => {
                        e.stopPropagation();
                        setCatActive(false);
                    }}/>
                    <div className={'SberCat-Cat-Dialog'}>
                        <div className={'SberCat-Cat-Dialog-Triangle'}>
                        </div>
                        <div className={'SberCat-Cat-Dialog-Content'}>

                            <Menu widths={3} inverted fixed>

                                <Menu.Item
                                    name='1'
                                    active={activeCatMenu === '1'}
                                    onClick={handleItemClick}
                                >
                                </Menu.Item>

                                <Menu.Item
                                    name='2'
                                    active={activeCatMenu === '2'}
                                    onClick={handleItemClick}
                                >
                                </Menu.Item>

                                <Menu.Item
                                    name='3'
                                    active={activeCatMenu === '3'}
                                    onClick={handleItemClick}
                                >
                                </Menu.Item>
                            </Menu>
                            <div className={'SberCat-Cat-Dialog-Content-Content'}>
                                { activeCatMenu === '1' ?
                                   <SberCatDialog
                                       catStatus={catStatus}
                                       setCatActive={setCatActive}
                                       setSeconds={setSeconds}
                                       setCatStatus={setCatStatus}
                                       setAnimateLevelValueStyle={setAnimateLevelValueStyle}
                                       setTimerActive={setTimerActive}

                                   />
                                    : null
                                }
                                { activeCatMenu === '2' ?
                                    <h1>2</h1>
                                    : null
                                }
                                { activeCatMenu === '3' ?
                                    <h1>3</h1>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    :
                    <img className={'SberCat-Status-Image'} src={like} alt={'like'}/>
            }
            </div>
    );
};

export default SberCat;