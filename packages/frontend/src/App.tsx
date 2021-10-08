import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './App.scss';
import Common from './Components/Common/Common';
import Header from './Components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import StartPage from './Pages/StartPage/StartPage';
import { UserContext, UserContextType } from './userContext';

const App: React.FC = () => {
    const [userId, setUserId] = useState<string>('ui');
    const history = useHistory();

    const isLoggined = userId !== '';

    const contextValue: UserContextType = {
        userId: userId,
        openProfile: () => history.push(userId),
    };

    return (
        <UserContext.Provider value={contextValue}>
            <div
                className="Wrapper"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Background.png)` }}
            >
                <Header isLoggined={isLoggined} />
                {isLoggined ? <MainPage /> : <StartPage onLogin={(id: string) => setUserId(id)} />}
            </div>
        </UserContext.Provider>
    );
};

export default App;
