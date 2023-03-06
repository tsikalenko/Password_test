import { useState } from 'react';
import Input from './components/Input';
import StrengthLine from './components/StrengthLine';

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
            <Input
                value={password}
                onChange={changePassword}
                label={'Enter password:'}
            />
            <StrengthLine strength={strength} />
        </form>
    );
}

export default App;
