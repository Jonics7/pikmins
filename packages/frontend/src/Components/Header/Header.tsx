import React, { useContext } from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/Icons/logo.svg';
import { ReactComponent as User } from '../../Assets/Icons/user.svg';
import { UserContext } from '../../userContext';
import { useHistory } from 'react-router';

interface HeaderProps {
    isLoggined: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggined }) => {
    const ctx = useContext(UserContext);
    const history = useHistory();

    return (
        <div className="Header">
            <Logo className="Header-logo" onClick={() => history.push('/')} />
            {isLoggined ? (
                <div className="Header-user-holder">
                    <User className="Header-user" onClick={ctx.openProfile} />
                </div>
            ) : null}
        </div>
    );
};

export default Header;
