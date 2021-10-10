import React, { useState } from 'react';
import './MergingPage.scss';
import { ReactComponent as Arrow } from '../../Assets/Icons/bottom-arrow.svg';
import { ReactComponent as Plus } from '../../Assets/Icons/doc-plus.svg';
import { ReactComponent as Minus } from '../../Assets/Icons/doc-minus.svg';
import Dropdown from '../../Components/Dropdown/Dropdown';
import MergingDataset, {
    MergingDatasetProps,
    MergingDatasetState,
} from '../../Components/MergingDataset/MergingDataset';
import Helper from '../../Components/Helper/Helper';
import datasets from '../../Data/Datasets.json';
import { Dataset, Filter, DatasetMods, Output } from 'common';

const DropdownItems = ['One To One', 'Many To Many'] as const;
export type DropdownItemsType = typeof DropdownItems[number];

const SortByItems = ['Name', 'Country', 'Price'] as const;
export type SortByItemsType = typeof SortByItems[number];

export type FieldType = Dataset['fields'][number];

const emptyField: FieldType = {
    id: '',
    description: '',
    type: 'string',
};

const MergingPage: React.FC = () => {
    const [data] = useState<Array<Dataset>>(datasets as Dataset[]);
    const [states, setStates] = useState<Array<MergingDatasetState>>(
        datasets.map<MergingDatasetState>((_) => ({
            newFields: [],
            filters: [],
        })),
    );
    const [fields, setFields] = useState<Array<FieldType>>([emptyField, emptyField]);

    const [expandedDataset, setExpandedDataset] = useState<string>('');
    const [price, setPrice] = useState<number>(1);

    const handeFields = (dataset: Dataset, field: FieldType) => {};

    const link = () => {};

    const stringToNumber = (text: string) => {
        const out = text.replace('$', '');
        setPrice(parseFloat(out));
    };

    const calculateTotalCost = () => {
        let cost = 0;
        datasets.forEach((dataset) => (cost += dataset.price));

        return cost;
    };

    const onChange = (newState: MergingDatasetState, idx: number) => {
        setStates([...states.slice(0, idx), newState, ...states.slice(idx + 1)]);
    };

    const onSubmit = () => {
        const output: Output = {
            datasets: datasets.map<DatasetMods>((d, idx) => ({
                urn: d.urn,
                filters: states[idx].filters as Filter[],
                newFields: states[idx].newFields,
            })),
        };

        const body = JSON.stringify(output);

        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body,
        });
    };

    console.log(price);

    return (
        <div className="MergingPage">
            <div className="MergingPage-header">
                <div className="MergingPage-header-controls">
                    <div className="MergingPage-header-button">
                        <Plus />
                    </div>
                    <div className="MergingPage-header-button">
                        <Minus />
                    </div>
                    <Dropdown items={SortByItems} onItemChange={(i) => {}} placeholder="Сортировка" />
                </div>
                <Helper isExpanded handleHelper={() => {}} />
            </div>
            <div className="MergingPage-layout">
                <div className="MergingPage-datasets-wrapper">
                    <div className="MergingPage-datasets">
                        {data.map((dataset, index) => (
                            <MergingDataset
                                state={states[index]}
                                onChange={(newState) => onChange(newState, index)}
                                dataset={dataset}
                                selectedFields={fields}
                                onFieldClick={(dataset: Dataset, field: FieldType) => handeFields(dataset, field)}
                                key={index}
                                expanded={dataset.urn === expandedDataset}
                                expand={() => setExpandedDataset(dataset.urn === expandedDataset ? '' : dataset.urn)}
                            />
                        ))}
                    </div>
                </div>
                <div className="MergingPage-right">
                    <div className="MergingPage-controls">
                        <div className="MergingPage-title">Work</div>
                        <div className="MergingPage-controls-field">
                            <div className="MergingPage-controls-field-text">{'Select'}</div>
                        </div>
                        <Dropdown items={DropdownItems} onItemChange={() => {}} placeholder="Отношение" />
                        <div className="MergingPage-controls-field">
                            <div className="MergingPage-controls-field-text">{'Select'}</div>
                        </div>
                        <div className="MergingPage-controls-button" onClick={link}>
                            Link
                        </div>
                    </div>
                    <div className="MergingPage-price" onClick={onSubmit}>
                        <div className="MergingPage-title">Цена</div>
                        <input
                            type="text"
                            className="MergingPage-price-input"
                            value={`$${price ?? 0}`}
                            onChange={(e) => stringToNumber(e.target.value)}
                        />
                        <div className="MergingPage-price-info">
                            <div className="MergingPage-price-info-text">Включает в себя датасеты на сумму</div>
                            <div className="MergingPage-price-info-cost">{calculateTotalCost()}$</div>
                        </div>
                        <div className="MergingPage-price-submit">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MergingPage;
