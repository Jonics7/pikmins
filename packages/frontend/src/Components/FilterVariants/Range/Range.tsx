import React from 'react';
import './Range.scss';

interface RangeProps {
    from?: number;
    to?: number;
    onFromChange?: () => void;
    onToChange?: () => void;
}

const Range: React.FC<RangeProps> = ({ from, to, onFromChange, onToChange }) => {
    return (
        <div className="Range">
            <input type="text" className="Range-input" value={from} onChange={onFromChange} placeholder="From" />
            <input type="text" className="Range-input" value={to} onChange={onToChange} placeholder="To" />
        </div>
    );
};

export default Range;
