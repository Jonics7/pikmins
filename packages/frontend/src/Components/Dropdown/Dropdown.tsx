import React, { useState } from 'react';
import './Dropdown.scss';
import { ReactComponent as Angle } from '../../Assets/Icons/angle.svg';

interface DropdownProps<T extends string> {
    items: T[] | readonly T[];
    onItemChange: (value: T) => void;
}

function Dropdown<T extends string>({ items, onItemChange }: DropdownProps<T>) {
    const [selected, setSelected] = useState<T>(items[0]);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onItemClick = (text: T) => {
        setSelected(text);
        setIsExpanded(false);
        onItemChange(text);
    };

    return (
        <div className={`Dropdown${isExpanded ? ' expanded' : ''}`}>
            <div className="Dropdown-selected" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="Dropdown-selected-text">{selected}</div>
                <Angle className="Dropdown-arrow" />
            </div>
            <div className={`Dropdown-items${isExpanded ? ' expanded' : ''}`}>
                {items
                    .filter((item: T) => item !== selected)
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
