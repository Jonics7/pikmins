import { useKeycloak } from '@react-keycloak/web';
import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import './App.scss';
import Header from './Components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import MergingPage from './Pages/MergingPage/MergingPage';
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

    const { keycloak } = useKeycloak();

    console.log((keycloak.idTokenParsed as any)?.preferred_username);

    return (
        <UserContext.Provider value={contextValue}>
            <div
                className="Wrapper"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Background.png)` }}
            >
                <Header isLoggined={isLoggined} />
                <Switch>
                    <Route path="/" exact>
                        {isLoggined ? <MainPage /> : <StartPage onLogin={(id: string) => setUserId(id)} />}
                    </Route>
                    <Route path="/merging" exact component={MergingPage} />
                </Switch>
            </div>
        </UserContext.Provider>
    );
};

export default App;
