import React, { useState } from 'react';
import './MainPage.scss';
import filters from '../../Data/DirectionFilters.json';
import DirectionFilter from '../../Components/DirectionFilter/DirectionFilter';
import Helper from '../../Components/Helper/Helper';
import DatasetItem from '../../Components/DatasetItem/DatasetItem';
import { ReactComponent as Doc } from '../../Assets/Icons/document.svg';
import { ReactComponent as Arrow } from '../../Assets/Icons/arrow.svg';
import { Dataset } from 'common';
import { useHistory } from 'react-router';
import QueryString from 'qs';
import { useContext } from 'react';
import { DatabasesContext } from '../../datasets';

const MainPage: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<Array<number>>([0]);
    const [selectedDatasets, setSelectedDatasets] = useState<Array<string>>([]);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const { datasets: maybeDatasets } = useContext(DatabasesContext);
    const datasets = maybeDatasets!;

    const history = useHistory();

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
            history.push(`/merging?${getQueryParams()}`);
        } else {
            setShowPopup(!showPopup);
        }
    };

    const getSlicedArray = (data: Array<Dataset>): Array<Dataset[]> => {
        const chankSize = 3;
        const tempArray: Array<Dataset[]> = [];

        for (let i = 0; i < data.length; i += chankSize) {
            let newChank = data.slice(i, i + chankSize);
            tempArray.push(newChank);
        }

        return tempArray;
    };

    const handeSelectedDatasets = (idx: string) => {
        if (selectedDatasets.includes(idx)) {
            setSelectedDatasets([...selectedDatasets.filter((selected) => selected !== idx)]);
        } else {
            setSelectedDatasets([...selectedDatasets, idx]);
        }
    };

    const getQueryParams = (): string => {
        return QueryString.stringify(selectedDatasets);
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
                <Helper isExpanded={selectedDatasets.length !== 0} handleHelper={handleHelper} />
            </div>
            <div className="MainPage-layout-wrapper">
                <div className="MainPage-layout">
                    {getSlicedArray(datasets).map((rows, idx) => (
                        <div className="MainPage-layout-row" key={idx}>
                            {rows.map((dataset, index) => (
                                <DatasetItem
                                    small={dataset.tags?.length === 0 || dataset.tags === undefined}
                                    title={dataset.title}
                                    price={dataset.price !== undefined ? Number(dataset.price) : undefined}
                                    rows={dataset.rows !== undefined ? Number(dataset.rows) : undefined}
                                    key={index}
                                    selected={selectedDatasets.includes(dataset.urn)}
                                    onClick={() => handeSelectedDatasets(dataset.urn)}
                                />
                            ))}
                        </div>
                    ))}
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
