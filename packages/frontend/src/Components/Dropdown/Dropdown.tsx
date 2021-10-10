import React, { useState } from 'react';
import './Dropdown.scss';
import { ReactComponent as Angle } from '../../Assets/Icons/angle.svg';

interface DropdownProps<T extends string> {
    items: T[] | readonly T[];
    value?: T;
    placeholder: string;
    onItemChange: (value: T) => void;
}

function Dropdown<T extends string>({ items, value, placeholder, onItemChange }: DropdownProps<T>) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onItemClick = (text: T) => {
        setIsExpanded(false);
        onItemChange(text);
    };

    return (
        <div className={`Dropdown${isExpanded ? ' expanded' : ''}`}>
            <div className="Dropdown-selected" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="Dropdown-selected-text">{value ?? placeholder}</div>
                <Angle className="Dropdown-arrow" />
            </div>
            <div className={`Dropdown-items${isExpanded ? ' expanded' : ''}`}>
                {items
                    .filter((item: T) => item !== value)
                    .map((item, index, arr) => (
                        <div className="Dropdown-item" key={index} onClick={() => onItemClick(item)}>
                            {item}
                            {index !== arr.length - 1 ? <div className="Dropdown-line" /> : null}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Dropdown;
