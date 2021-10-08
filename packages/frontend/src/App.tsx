import React, { useState } from 'react';
import './App.scss';
import Common from './Components/Common/Common';
import StartPage from './Pages/StartPage/StartPage';

const App: React.FC = () => {
    const [isLoggined, setIsLoggined] = useState<boolean>(false);

    return (
        <div className="Wrapper" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Background.png)` }}>
            <Common />
            {isLoggined ? null : <StartPage />}
        </div>
    );
};

export default App;
