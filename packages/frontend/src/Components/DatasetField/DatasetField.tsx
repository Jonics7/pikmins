import React from 'react';
import './DatasetField.scss';

interface DatasetFieldProps {
    selected: boolean;
    name: string;
    value: string;
    onClick: () => void;
    inactive?: boolean;
}

const DatasetField: React.FC<DatasetFieldProps> = ({ selected, name, value, onClick, inactive }) => {
    return (
        <div className={`DatasetField${selected ? ' selected' : ''}${inactive ? ' inactive' : ''}`} onClick={onClick}>
            <div className="DatasetField-name">{name}</div>
            <div className="DatasetField-value">{value}</div>
        </div>
    );
};

export default DatasetField;
