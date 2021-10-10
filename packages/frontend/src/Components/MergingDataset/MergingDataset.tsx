import { Dataset } from 'common';
import React from 'react';
import { FieldType } from '../../Pages/MergingPage/MergingPage';
import DatasetField from '../DatasetField/DatasetField';
import Tag from '../Tag/Tag';
import './MergingDataset.scss';
import { ReactComponent as Angle } from '../../Assets/Icons/angle.svg';
import Filter from '../Filter/Filter';
import { useState } from 'react';
import MergingDatasetAddition, { AddRequest } from './MergingDatasetAddition';

export interface MergingDatasetProps {
    onFieldClick: (dataset: Dataset, fieldData: FieldType) => void;
    selectedFields: Array<FieldType>;
    dataset: Dataset;
    expanded?: boolean;
    expand?: () => void;
}

const MergingDataset: React.FC<MergingDatasetProps> = ({ onFieldClick, selectedFields, dataset, expanded, expand }) => {
    const [addRequest, setAddRequest] = useState<AddRequest | undefined>();

    return (
        <div className="MergingDataset">
            {!expanded ? (
                <div className="MergingDataset-collapsed">
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
                                    onClick={() => onFieldClick(dataset, field)}
                                    selected={selectedFields.every((fieldData) => field.id === fieldData.id)}
                                    name={field.id}
                                    value={field.description ?? ''}
                                    key={index}
                                    linked="a"
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
            ) : (
                <div className="MergingDataset-expanded">
                    <div className="MergingDataset-info">
                        <div className="MergingDataset-title">{dataset.title}</div>
                        <div className="MergingDataset-tags">
                            {dataset.tags?.slice(0, 3).map((tag, idx) => (
                                <Tag color="#E18080" text={tag} key={idx} />
                            ))}
                        </div>
                        <div className="MergingDataset-price">
                            {dataset.price !== null && dataset.price !== undefined ? (
                                <div className="MergingDataset-price-value">${dataset.price}.00</div>
                            ) : null}
                        </div>
                    </div>
                    {/* <Filter fields={dataset.fields} /> */}
                    <button className="MergingDataset-add-filter">Добавить фильтры</button>

                    <div className="MergingDataset-fields-bottom-holder">
                        <div className="MergingDataset-fields">
                            {dataset.fields.map((field, index) => (
                                <DatasetField
                                    onClick={() => onFieldClick(dataset, field)}
                                    selected={selectedFields.every((fieldData) => field.id === fieldData.id)}
                                    name={field.id}
                                    value={field.description ?? ''}
                                    key={field.id}
                                />
                            ))}
                            <button
                                className={'MergingDataset-add' + (addRequest !== undefined ? ' inactive' : '')}
                                onClick={addRequest === undefined ? () => setAddRequest({ id: '' }) : undefined}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {addRequest !== undefined ? (
                        <MergingDatasetAddition
                            request={addRequest}
                            onChange={setAddRequest}
                            close={() => setAddRequest(undefined)}
                            fields={dataset.fields}
                        />
                    ) : null}
                </div>
            )}

            <Angle className={`MergingDataset-arrow${expanded ? ' rotate' : ''}`} onClick={expand} />
        </div>
    );
};

export default MergingDataset;
