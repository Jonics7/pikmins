import React, { useState } from 'react';
import './Auth.scss';
import Login from './Login/Login';
import Register from './Register/Register';

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const login = () => {};
    const register = () => {};

    return (
        <div className="Auth">
            {isLogin ? (
                <Login switchCallback={() => setIsLogin(!isLogin)} login={login} />
            ) : (
                <Register switchCallback={() => setIsLogin(!isLogin)} register={register} />
            )}
        </div>
    );
};

export default Auth;
