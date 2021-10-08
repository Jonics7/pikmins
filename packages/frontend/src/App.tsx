import React, { useState } from 'react';
import './App.scss';
import Common from './Components/Common/Common';
import MainPage from './Pages/MainPage/MainPage';
import StartPage from './Pages/StartPage/StartPage';
import { UserContext, UserContextType } from './userContext';

const App: React.FC = () => {
    const [userId, setUserId] = useState<string>('ui');

    const isLoggined = userId !== '';

    const openProfile = () => {};

    const contextValue: UserContextType = {
        userId: userId,
        openProfile: () => openProfile(),
    };

    return (
        <UserContext.Provider value={contextValue}>
            <div
                className="Wrapper"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Background.png)` }}
            >
                <Common isLoggined={isLoggined} />
                {isLoggined ? <MainPage /> : <StartPage onLogin={(id: string) => setUserId(id)} />}
            </div>
        </UserContext.Provider>
    );
};

export default App;
