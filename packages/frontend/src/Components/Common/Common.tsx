import React from 'react';
import Header from '../Header/Header';
import './Common.scss';

interface CommonProps {
    isLoggined: boolean;
}

const Common: React.FC<CommonProps> = ({ isLoggined }) => {
    return (
        <div className="Common">
            <Header isLoggined={isLoggined} />
        </div>
    );
};

export default Common;
