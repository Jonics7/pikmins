import React from 'react';
import DatasetField from '../DatasetField/DatasetField';
import Tag from '../Tag/Tag';
import './MergingDataset.scss';

import './MergingDataset.scss';

export interface MergingDatasetProps {
    onFieldClick: (field: string) => void;
    selectedFields: Array<string>;
}

const MergingDataset: React.FC<MergingDatasetProps> = ({ onFieldClick, selectedFields }) => {
    return (
        <div className="MergingDataset">
            <div className="MergingDataset-info">
                <div className="MergingDataset-title">Financial Advisor, USA</div>
                <div className="MergingDataset-tags">
                    <Tag color="#E18080" text="Financial Advisors" />
                    <Tag color="#997EBB" text="Financial Consultant" />
                </div>
            </div>
            <div className="MergingDataset-fields-holder">
                <div className="MergingDataset-fields">
                    <DatasetField
                        onClick={(field: string) => onFieldClick(field)}
                        selected={selectedFields.includes('UserID')}
                        name="UserID"
                        value="1337"
                    />
                    <DatasetField
                        onClick={(field: string) => onFieldClick(field)}
                        selected={selectedFields.includes('Email')}
                        name="Email"
                        value="example@emal.ru"
                    />
                    <DatasetField
                        onClick={(field: string) => onFieldClick(field)}
                        selected={selectedFields.includes('ФИО')}
                        name="ФИО"
                        value="name"
                    />
                </div>
            </div>
            <div className="MergingDataset-price">
                <div className="MergingDataset-price-value">$299.00</div>
                <div className="MergingDataset-rows">Rows: 4636</div>
            </div>
        </div>
    );
};

export default MergingDataset;
