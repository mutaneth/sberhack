import React, {useEffect, useState} from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom'
import logo from '../../images/PROD.png';
import ava from '../../images/Dawn+-+round.png'
import url from "../../url";
import axios from 'axios';

export default function MenuBar(props) {
    const leftSideButtons = [
        {name: 'спринты', to: 'sprints'},
        {name: 'отчеты', to: 'advices'},
        {name: 'заметки', to: 'notes'},
         {name: 'магазин', to: 'shop'},
    ];

    const {leftSideActiveItem, setLeftSideActiveItem, secret, token} = props;

    const [userAvatar, setUserAvatar] = useState('');
    const   [userName, setUserName] = useState('');
    const handleGetUser = async () => {
        await axios(url.prefix + "user/getCurrentUser", {
            params: {
                secret,
                token,
            }
        }).then(res => {
            setUserName(res.data.displayName);
            setUserAvatar(res.data.avatarUrls["48x48"]);
            console.log(res.data);
        })
    };

    useEffect(() => {
        handleGetUser().then(() => {

        })
    }, []);

    const buttons = leftSideButtons.map((but, index) => {
        let activeClass;
        but.to === leftSideActiveItem ?
            activeClass = 'activeItem' : activeClass = '';
        return (
            <div className={`MenuBar-Button`} onClick={() => {
                setLeftSideActiveItem(but.to);
            }}>
                <Link key={but.name} style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} to={'/' + but.to}>
                    {but.to === leftSideActiveItem ?
                        <h2 className={'MenuBar-Button-Text'}>{but.name.toUpperCase()}</h2>
                        : <h3 className={'MenuBar-Button-Text'}>{but.name.toUpperCase()}</h3>
                    }
                        </Link>
                <div className={activeClass}>
                </div>
            </div>

        );
    });

    return (
        <div className="MenuBar">
            <div className={'MenuBar-LogoButton'}>
            <Link  onClick={() => {
                setLeftSideActiveItem('')
            }}  to={'/'}>
                <img alt="logo" src={logo}  className="logo"/>
            </Link>
            </div>
            <div className="MenuBar-Menu">
                {buttons}
            </div>
            <div className='MenuBar-Profile'>
                <Link to={'/profile'}>
                    <div className={'MenuBar-Profile-UserContainer'}>
                    <img className={'MenuBar-Profile-UserLogo'} src={userAvatar} alt={'ava'}/>
                    <h3>{userName}</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}