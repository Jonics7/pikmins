import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <div className="Button" onClick={onClick}>
            <div className="Button-text">{text}</div>
        </div>
    );
};

export default Button;
