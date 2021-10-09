import { Dataset } from 'common';
import React from 'react';
import { FieldType } from '../../Pages/MergingPage/MergingPage';
import DatasetField from '../DatasetField/DatasetField';
import Tag from '../Tag/Tag';
import './MergingDataset.scss';

export interface MergingDatasetProps {
    onFieldClick: (dataset: Dataset, fieldData: FieldType) => void;
    selectedFields: Array<FieldType>;
    dataset: Dataset;
}

const MergingDataset: React.FC<MergingDatasetProps> = ({ onFieldClick, selectedFields, dataset }) => {
    return (
        <div className="MergingDataset">
            <div className="MergingDataset-info">
                <div className="MergingDataset-title">{dataset.title}</div>
                <div className="MergingDataset-tags">
                    {dataset.tags?.map((tag, idx) => (
                        <Tag color="#E18080" text={tag} key={idx} />
                    ))}
                </div>
            </div>
            <div className="MergingDataset-fields-holder">
                <div className="MergingDataset-fields">
                    {dataset.fields.map((field, index) => (
                        <DatasetField
                            onClick={() =>
                                onFieldClick(dataset, {
                                    id: field.id,
                                    description: field.description,
                                    type: field.type,
                                })
                            }
                            selected={selectedFields.every((fieldData) => field.id === fieldData.id)}
                            name={field.id}
                            value={field.description ?? ''}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className="MergingDataset-price">
                {dataset.price !== null && dataset.price !== undefined ? (
                    <div className="MergingDataset-price-value">${dataset.price}.00</div>
                ) : null}
                {dataset.rows !== null && dataset !== undefined ? (
                    <div className="MergingDataset-rows">Rows: {dataset.rows}</div>
                ) : null}
            </div>
        </div>
    );
};

export default MergingDataset;
