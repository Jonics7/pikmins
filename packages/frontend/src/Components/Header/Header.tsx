import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/Icons/logo.svg';
import { ReactComponent as User } from '../../Assets/Icons/user.svg';

interface HeaderProps {
    isLoggined: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggined }) => {
    return (
        <div className="Header">
            <Logo className="Header-logo" />
            {isLoggined ? <div className="Header-user">{<User />}</div> : null}
        </div>
    );
};

export default Header;
