import React from 'react';
import Button from '../../FormParts/Button/Button';
import Input from '../../FormParts/Input/Input';

interface LoginProps {
    switchCallback: () => void;
    register: () => void;
}

const Register: React.FC<LoginProps> = ({ switchCallback, register }) => {
    return (
        <>
            <div className="Auth-title">Вход</div>
            <Input placeholder="Почта" type="email" />
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" type="password" />
            <div onClick={switchCallback} className="Auth-register">
                Уже есть аккаунт?
            </div>
            <Button text="Зарегистрироваться" onClick={register} />
        </>
    );
};

export default Register;
