import React, { useState } from 'react';
import './MainPage.scss';
import filters from '../../Data/DirectionFilters.json';
import DirectionFilter from '../../Components/DirectionFilter/DirectionFilter';
import Helper from '../../Components/Helper/Helper';
import DatasetItem from '../../Components/DatasetItem/DatasetItem';
import { ReactComponent as Doc } from '../../Assets/Icons/document.svg';
import { ReactComponent as Arrow } from '../../Assets/Icons/arrow.svg';

const MainPage: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<Array<number>>([0]);
    const [helperIsExpanded, setHelperIsExpanded] = useState<boolean>(false);
    const [selectedDatasets, setSelectedDatasets] = useState<Array<number>>([]);
    const [showPopup, setShowPopup] = useState<boolean>(false);

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
        if (selectedDatasets.length !== 0) {
            setHelperIsExpanded(!helperIsExpanded);
        } else {
            console.log('a');

            setShowPopup(!showPopup);
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
            <div className="MainPage-layout">
                <div className="MainPage-layout-row">
                    <DatasetItem small={false} title="Accountants, San Diego (CA)" price={49.0} rows={512} />
                    <DatasetItem small={false} title="Accountants, San Diego (CA)" price={49.0} rows={512} />
                    <DatasetItem small={true} title="Accountants, San Diego (CA)" price={49.0} rows={512} />
                </div>
            </div>

            <div className={`MainPage-helper-popup${showPopup ? ' show' : ''}`}>
                <div className="MainPage-helper-popup-description">
                    Для того чтобы начать работу с Датасетом или несколькими, выберите их и перейдите в рабочу область.{' '}
                </div>
                <div className="MainPage-helper-popup-icons">
                    <Doc className="MainPage-helper-popup-icons-doc" />
                    <Arrow className="MainPage-helper-popup-icons-arrow" />
                    <Doc className="MainPage-helper-popup-icons-doc" />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
