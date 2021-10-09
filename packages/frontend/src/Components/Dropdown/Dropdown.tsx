import React, { useState } from 'react';
import './Dropdown.scss';
import { ReactComponent as Angle } from '../../Assets/Icons/angle.svg';

const DropdownItems = ['One To One', 'Many To Many'] as const;
type DropdownItemsType = typeof DropdownItems[number];

const Dropdown: React.FC = () => {
    const [selected, setSelected] = useState<DropdownItemsType>('One To One');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className="Dropdown">
            <div className="Dropdown-selected">
                <div className="Dropdown-selected-text">{selected}</div>
                <Angle className="Dropdown-arrow" />
            </div>
            <div className={`Dropdown-items${isExpanded ? 'expanded' : ''}`}></div>
        </div>
    );
};

export default Dropdown;
