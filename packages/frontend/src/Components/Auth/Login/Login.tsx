import React from 'react';
import Button from '../../FormParts/Button/Button';
import Input from '../../FormParts/Input/Input';

interface LoginProps {
    switchCallback: () => void;
    login: () => void;
}

const Login: React.FC<LoginProps> = ({ switchCallback, login }) => {
    return (
        <>
            <div className="Auth-title">Вход</div>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" type="password" />
            <div onClick={switchCallback} className="Auth-register">
                Нет аккаунта?
            </div>
            <Button text="Войти в систему" onClick={login} />
        </>
    );
};

export default Login;
