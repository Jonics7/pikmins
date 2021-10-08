import React, { useState } from 'react';
import './MainPage.scss';
import filters from '../../Data/DirectionFilters.json';
import DirectionFilter from '../../Components/DirectionFilter/DirectionFilter';
import Helper from '../../Components/Helper/Helper';

const MainPage: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<Array<number>>([0]);
    const [helperIsExpanded, setHelperIsExpanded] = useState<boolean>(false);
    const [selectedDatasets, setSelectedDatasets] = useState<Array<number>>([0]);

    const handleFilter = (id: number) => {
        if (selectedFilters.includes(id)) {
            if (selectedFilters.length === 1) return;

            let newArray = selectedFilters.filter((filter) => filter !== id);
            setSelectedFilters(newArray);
        } else {
            setSelectedFilters([...selectedFilters, id]);
        }
    };

    const handleHelper = () => {
        console.log('1');
        if (selectedDatasets.length !== 0) {
            setHelperIsExpanded(!helperIsExpanded);
        }
    };

    return (
        <div className="MainPage">
            <div className="MainPage-header">
                <div className="MainPage-filters">
                    {filters.map((filter, index) => (
                        <DirectionFilter
                            handleSelected={() => handleFilter(index)}
                            selected={selectedFilters?.includes(index)}
                            text={filter}
                            key={index}
                        />
                    ))}
                </div>
                <Helper isExpanded={helperIsExpanded} handleHelper={handleHelper} />
            </div>
        </div>
    );
};

export default MainPage;
