import React, { useState } from 'react';
import './Auth.scss';
import Login from './Login/Login';
import Register from './Register/Register';

interface AuthProps {
    onLogin: (id: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const login = (id: string) => {
        onLogin(id);
    };
    const register = () => {};

    return (
        <div className="Auth">
            {isLogin ? (
                <Login switchCallback={() => setIsLogin(!isLogin)} login={() => login('id')} />
            ) : (
                <Register switchCallback={() => setIsLogin(!isLogin)} register={register} />
            )}
        </div>
    );
};

export default Auth;
