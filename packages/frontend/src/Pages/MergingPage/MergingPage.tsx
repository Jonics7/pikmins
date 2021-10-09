import React, { useState } from 'react';
import './MergingPage.scss';
import { ReactComponent as Arrow } from '../../Assets/Icons/bottom-arrow.svg';
import { ReactComponent as Plus } from '../../Assets/Icons/doc-plus.svg';
import { ReactComponent as Minus } from '../../Assets/Icons/doc-minus.svg';
import Dropdown from '../../Components/Dropdown/Dropdown';
import MergingDataset from '../../Components/MergingDataset/MergingDataset';
import Helper from '../../Components/Helper/Helper';

const DropdownItems = ['One To One', 'Many To Many'] as const;
export type DropdownItemsType = typeof DropdownItems[number];

const SortByItems = ['Sort By', 'Name', 'Country', 'Price'] as const;
export type SortByItemsType = typeof SortByItems[number];

export type FieldType = {
    datasetId: number;
    fieldId: number;
    name: string;
};

const emptyField: FieldType = {
    datasetId: -1,
    fieldId: -1,
    name: '',
};

const MergingPage: React.FC = () => {
    const [fields, setFields] = useState<Array<FieldType>>([emptyField, emptyField]);
    const [result, setResult] = useState<string>('Financial Advisors Combination');

    const handeFields = (field: FieldType) => {
        if (fields[0].datasetId === field.datasetId) {
            setFields([field, fields[1]]);
        } else if (fields[1].datasetId === field.datasetId) {
            setFields([fields[0], field]);
        } else {
            setFields([field, ...fields]);
        }
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
                    <MergingDataset selectedFields={fields} onFieldClick={(field: FieldType) => handeFields(field)} />
                </div>
                <div className="MergingPage-controls">
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">{fields[0].name}</div>
                    </div>
                    <Dropdown items={DropdownItems} onItemChange={() => {}} />
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">{fields[1].name}</div>
                    </div>
                    <Arrow className="MergingPage-controls-arrow" />
                    <input
                        type="text"
                        className="MergingPage-controls-result"
                        placeholder="Name"
                        onChange={(e) => setResult(e.target.value)}
                        value={result}
                    />
                    <div className="MergingPage-controls-button">Convert</div>
                </div>
            </div>
        </div>
    );
};

export default MergingPage;
