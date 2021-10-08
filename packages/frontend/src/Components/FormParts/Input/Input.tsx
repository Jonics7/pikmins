import React from 'react';
import './Input.scss';

interface InputProps {
    placeholder: string;
    type?: 'text' | 'password' | 'email';
    onChangeCallback?: () => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChangeCallback, type = 'text' }) => {
    return <input type={type} placeholder={placeholder} onChange={onChangeCallback} className="Input" />;
};

export default Input;
