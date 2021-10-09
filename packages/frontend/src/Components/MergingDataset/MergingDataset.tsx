import React from 'react';
import { FieldType } from '../../Pages/MergingPage/MergingPage';
import DatasetField from '../DatasetField/DatasetField';
import Tag from '../Tag/Tag';
import './MergingDataset.scss';

export interface MergingDatasetProps {
    onFieldClick: (fieldData: FieldType) => void;
    selectedFields: Array<FieldType>;
    title: string;
}

const MergingDataset: React.FC<MergingDatasetProps> = ({ onFieldClick, selectedFields, title }) => {
    return (
        <div className="MergingDataset">
            <div className="MergingDataset-info">
                <div className="MergingDataset-title">{title}</div>
                <div className="MergingDataset-tags">
                    <Tag color="#E18080" text="Financial Advisors" />
                    <Tag color="#997EBB" text="Financial Consultant" />
                </div>
            </div>
            <div className="MergingDataset-fields-holder">
                <div className="MergingDataset-fields">
                    <DatasetField
                        onClick={() =>
                            onFieldClick({
                                datasetId: 0,
                                fieldId: 0,
                                name: 'UserID',
                            })
                        }
                        selected={selectedFields[0].fieldId === 0}
                        name="UserID"
                        value="1337"
                    />
                    <DatasetField
                        onClick={() =>
                            onFieldClick({
                                datasetId: 0,
                                fieldId: 1,
                                name: 'Email',
                            })
                        }
                        selected={selectedFields[0].fieldId === 1}
                        name="Email"
                        value="example@emal.ru"
                    />
                    <DatasetField
                        onClick={() =>
                            onFieldClick({
                                datasetId: 0,
                                fieldId: 2,
                                name: 'ФИО',
                            })
                        }
                        selected={selectedFields[0].fieldId === 2}
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
