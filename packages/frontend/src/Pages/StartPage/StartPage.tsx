import React from 'react';
import Auth from '../../Components/Auth/Auth';
import './StartPage.scss';

const StartPage: React.FC = () => {
    return (
        <div className="StartPage">
            <div className="StartPage-info"></div>
            <div className="StartPage-auth">
                <Auth />
            </div>
        </div>
    );
};

export default StartPage;
