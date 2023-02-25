import { useState } from 'react';
import classNames from 'classnames';

import './App.scss';

function App() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const changePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length === 0) {
            setStrength(0);
        } else if (newPassword.length > 0 && newPassword.length < 8) {
            setStrength(1);
        } else if (
            newPassword.match(/[a-zA-Z]/) &&
            newPassword.match(/[0-9]/) &&
            newPassword.match(/[_\W]/)
        ) {
            setStrength(4);
        } else if (
            (newPassword.match(/[a-zA-Z]/) && newPassword.match(/[0-9]/)) ||
            (newPassword.match(/[a-zA-Z]/) && newPassword.match(/[_\W]/)) ||
            (newPassword.match(/[0-9]/) && newPassword.match(/[_\W]/))
        ) {
            setStrength(3);
        } else if (newPassword.length >= 8) {
            setStrength(2);
        }
    };

    return (
        <form className='form'>
            <label className='form__label'>Enter password:</label>
            <input
                type='text'
                className='form__password'
                value={password}
                onChange={changePassword}
            />
            <div className='form__strength strength'>
                <div
                    className={classNames('strength__section', {
                        'strength__section--red':
                            strength === 1 || strength === 2,
                        'strength__section--yellow': strength === 3,
                        'strength__section--green': strength === 4,
                    })}
                ></div>
                <div
                    className={classNames('strength__section', {
                        'strength__section--red': strength === 1,
                        'strength__section--yellow': strength === 3,
                        'strength__section--green': strength === 4,
                    })}
                ></div>
                <div
                    className={classNames('strength__section', {
                        'strength__section--red': strength === 1,
                        'strength__section--green': strength === 4,
                    })}
                ></div>
            </div>
        </form>
    );
}

export default App;
