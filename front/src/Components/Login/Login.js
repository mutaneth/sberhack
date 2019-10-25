import React, {useState, useEffect} from 'react';
import axios from 'axios';
import url from '../../url';

const Login = (props) => {
    const { setIsAuth, setNormToken, setSecret } = props;
    const [secretInput, setSecretInput] = useState('');
    const [tmpToken, setTmpToken] = useState('');
    const handleGetLink = async () => {
        try {

            await axios(url.prefix + 'auth/temp').then(res => {
                console.log(res);
                window.open(res.data.authorizationURL, '_blank');
                localStorage.setItem('secret', secretInput);
                localStorage.setItem('tmpToken', res.data.token);
                setTmpToken(res.data.token);
            })

        } catch (e) {
            console.error(e);
        }
        };
    const handleLogin = async () => {
        try {
            localStorage.setItem('secret', secretInput);
            await axios(url.prefix + 'auth/norm', {
                params: {
                    tmptoken: tmpToken,
                    secret: secretInput,
                }
            })
                .then(res => {
                console.log(res);
                localStorage.setItem('normToken', res.data.token);
                setNormToken(res.data.token);
                setSecret(secretInput);
            });
            setIsAuth(true);
        } catch (e) {
            console.error(e);
        }
    };
       return (
            <div style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <button onClick={handleGetLink}> получить ссыл_очку</button>
                <input value={secretInput} onChange={(e) => {
                    setSecretInput(e.target.value);
                }} placeholder={'СЕКРЕТНЫЙ КОД'}/>
                <button onClick={handleLogin}> логин </button>
            </div>
        );
}

export default Login ;