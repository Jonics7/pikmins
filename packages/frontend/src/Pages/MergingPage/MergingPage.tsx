import React, { useState } from 'react';
import './MergingPage.scss';
import { ReactComponent as Arrow } from '../../Assets/Icons/bottom-arrow.svg';
import { ReactComponent as Plus } from '../../Assets/Icons/doc-plus.svg';
import { ReactComponent as Minus } from '../../Assets/Icons/doc-minus.svg';
import Dropdown from '../../Components/Dropdown/Dropdown';
import MergingDataset from '../../Components/MergingDataset/MergingDataset';
import Helper from '../../Components/Helper/Helper';
import datasets from '../../Data/Datasets.json';
import { Dataset } from 'common';

const data = datasets as Dataset[];

const DropdownItems = ['One To One', 'Many To Many'] as const;
export type DropdownItemsType = typeof DropdownItems[number];

const SortByItems = ['Sort By', 'Name', 'Country', 'Price'] as const;
export type SortByItemsType = typeof SortByItems[number];

export type FieldType = Dataset['fields'][number];

const emptyField: FieldType = {
    id: '',
    description: '',
    type: 'string',
};

const MergingPage: React.FC = () => {
    const [fields, setFields] = useState<Array<FieldType>>([emptyField, emptyField]);
    const [result, setResult] = useState<string>('Financial Advisors Combination');

    const handeFields = (field: FieldType) => {
        // if (fields[0].datasetId === field.datasetId) {
        //     if (fields[0].fieldId === field.fieldId) {
        //         setFields([emptyField, fields[1]]);
        //     } else {
        //         setFields([field, fields[1]]);
        //     }
        // } else if (fields[1].datasetId === field.datasetId) {
        //     if (fields[1].fieldId === field.fieldId) {
        //         setFields([fields[0], emptyField]);
        //     } else {
        //         setFields([fields[0], field]);
        //     }
        // } else {
        //     setFields([field, ...fields]);
        // }
    };

    const onSubmit = () => {
        // if (fields.every((field) => field.datasetId !== -1)) {
        //     //TODO: do something
        // }
    };

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
                    <Dropdown items={SortByItems} onItemChange={(i) => {}} />
                </div>
                <Helper isExpanded handleHelper={() => {}} />
            </div>
            <div className="MergingPage-layout">
                <div className="MergingPage-datasets">
                    {data.map((dataset, index) => (
                        <MergingDataset
                            dataset={dataset}
                            selectedFields={fields}
                            onFieldClick={(field: FieldType) => handeFields(field)}
                            key={index}
                        />
                    ))}
                </div>
                <div className="MergingPage-controls">
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">{fields[0].id}</div>
                    </div>
                    <Dropdown items={DropdownItems} onItemChange={() => {}} />
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">{fields[1].id}</div>
                    </div>
                    <Arrow className="MergingPage-controls-arrow" />
                    <input
                        type="text"
                        className="MergingPage-controls-result"
                        placeholder="Name"
                        onChange={(e) => setResult(e.target.value)}
                        value={result}
                    />
                    <div className="MergingPage-controls-button" onClick={onSubmit}>
                        Convert
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MergingPage;