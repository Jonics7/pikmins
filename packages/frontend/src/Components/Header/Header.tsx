import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/Icons/logo.svg';

const Header: React.FC = () => {
    return (
        <div className="Header">
            <Logo />
        </div>
    );
};

export default Header;
