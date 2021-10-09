import React from 'react';
import './DatasetField.scss';

interface DatasetFieldProps {
    selected: boolean;
    name: string;
    value: string;
    onClick: () => void;
}

const DatasetField: React.FC<DatasetFieldProps> = ({ selected, name, value, onClick }) => {
    return (
        <div className={`DatasetField${selected ? ' selected' : ''}`} onClick={onClick}>
            <div className="DatasetField-name">{name}</div>
            <div className="DatasetField-value">{value}</div>
        </div>
    );
};

export default DatasetField;
