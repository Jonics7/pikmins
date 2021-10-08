import React from 'react';
import Auth from '../../Components/Auth/Auth';
import './StartPage.scss';

interface StartPageProps {
    onLogin: (id: string) => void;
}

const StartPage: React.FC<StartPageProps> = ({ onLogin }) => {
    return (
        <div className="StartPage">
            <div className="StartPage-info"></div>
            <div className="StartPage-auth">
                <Auth onLogin={(id: string) => onLogin(id)} />
            </div>
        </div>
    );
};

export default StartPage;
