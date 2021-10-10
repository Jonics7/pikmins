import React from 'react';
import './DatasetField.scss';
import { ReactComponent as Link } from '../../Assets/Icons/link.svg';
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg';

interface DatasetFieldProps {
    selected: boolean;
    name: string;
    value: string;
    onClick: () => void;
    inactive?: boolean;
    linked?: string;
    canBeDeleted?: boolean;
}

const DatasetField: React.FC<DatasetFieldProps> = ({
    selected,
    name,
    value,
    onClick,
    inactive,
    linked,
    canBeDeleted,
}) => {
    return (
        <div className={`DatasetField${selected ? ' selected' : ''}${inactive ? ' inactive' : ''}`} onClick={onClick}>
            <div className="DatasetField-name">{name}</div>
            <div className="DatasetField-value">{value}</div>
            {linked ? <Link className="DatasetField-link" /> : null}
            {canBeDeleted ? <Delete className="DatasetField-delete" /> : null}
        </div>
    );
};

export default DatasetField;
