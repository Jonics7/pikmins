import React, { useCallback, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { ReactComponent as Cross } from '../../Assets/Icons/cross.svg';
import Range from '../FilterVariants/Range/Range';

import './Filter.scss';
import { FieldType } from '../../Pages/MergingPage/MergingPage';

const FilterOptions = ['Filter', 'Range', 'Time', 'Date'];

export interface RangeFilterState {
    type: 'range';
    min: number;
    max: number;
}

export interface FilterState {
    fieldId: string;
    filter: RangeFilterState;
}

export interface FilterProps {
    filterState: FilterState;
    onChange: (newState: FilterState) => void;
    deleteFilter?: () => void;
    fields: Array<FieldType>;
}

const Filter: React.FC<FilterProps> = ({ deleteFilter, fields }) => {
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
                <Dropdown items={fields.map((field) => field.id)} onItemChange={() => {}} />
                <Dropdown items={FilterOptions} onItemChange={(filter) => setSelectedFilter(filter)} />
                {showFilter()}
            </div>
            <Cross className="Filter-delete" onClick={deleteFilter} />
        </div>
    );
};

export default Filter;
