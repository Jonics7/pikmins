import React from 'react';
import './DirectionFilter.scss';

interface DirectionFilterProps {
    text: string;
    selected: boolean;
    handleSelected: () => void;
}

const DirectionFilter: React.FC<DirectionFilterProps> = ({ text, selected, handleSelected }) => {
    return (
        <div onClick={handleSelected} className={`DirectionFilter${selected ? ' clicked' : ''}`}>
            <div className="DirectionFilter-text">{text}</div>
        </div>
    );
};

export default DirectionFilter;
