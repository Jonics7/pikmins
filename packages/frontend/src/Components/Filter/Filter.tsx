import React, { useCallback, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { ReactComponent as Cross } from '../../Assets/Icons/cross.svg';
import Range from '../FilterVariants/Range/Range';

import './Filter.scss';

const FilterOptions = ['Filter', 'Range', 'Time', 'Date'];

export interface FilterProps {
    deleteFilter?: () => void;
}

const Filter: React.FC<FilterProps> = ({ deleteFilter }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('');

    const showFilter = useCallback(() => {
        switch (selectedFilter) {
            case '':
                return null;

            case 'Range':
                return <Range />;
        }
    }, [selectedFilter]);

    return (
        <div className="Filter">
            <div className="Filter-info">
                <Dropdown items={FilterOptions} onItemChange={(filter) => setSelectedFilter(filter)} />
                {showFilter()}
            </div>
            <Cross className="Filter-delete" onClick={deleteFilter} />
        </div>
    );
};

export default Filter;
