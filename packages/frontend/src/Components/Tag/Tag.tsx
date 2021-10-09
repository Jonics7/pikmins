import React from 'react';

import './Tag.scss';

export interface TagProps {
    text: string;
    color: string;
}

const Tag: React.FC<TagProps> = ({ text, color }) => {
    return (
        <div className="Tag">
            <div className="Tag-circle" style={{ backgroundColor: color }} />
            <div className="Tag-text">{text}</div>
        </div>
    );
};

export default Tag;
