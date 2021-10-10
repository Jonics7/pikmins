import { Dataset } from 'common';
import React from 'react';
import { FieldType } from '../../Pages/MergingPage/MergingPage';
import DatasetField from '../DatasetField/DatasetField';
import Tag from '../Tag/Tag';
import './MergingDataset.scss';
import { ReactComponent as Angle } from '../../Assets/Icons/angle.svg';
import { ReactComponent as Plus } from '../../Assets/Icons/plus.svg';
import Filter, { FilterState } from '../Filter/Filter';
import { useState } from 'react';
import MergingDatasetAddition, { AddRequest, NewFieldType } from './MergingDatasetAddition';

export interface MergingDatasetState {
    newFields: NewFieldType[];
    filters: FilterState[];
}

export interface MergingDatasetProps {
    state: MergingDatasetState;
    onChange: (newState: MergingDatasetState) => void;
    onFieldClick: (dataset: Dataset, fieldData: FieldType) => void;
    selectedFields: Array<FieldType>;
    dataset: Dataset;
    expanded?: boolean;
    expand?: () => void;
}

const MergingDataset: React.FC<MergingDatasetProps> = ({
    state,
    onChange,
    onFieldClick,
    selectedFields,
    dataset,
    expanded,
    expand,
}) => {
    const [addRequest, setAddRequest] = useState<AddRequest | undefined>();

    const addFilter = () => {
        const filter: FilterState = {
            fieldId: '',
            type: 'range',
            min: 0,
            max: 0,
        };

        onChange({
            ...state,
            filters: [...state.filters, filter],
        });
    };

    const onFilterChange = (newState: FilterState, idx: number) => {
        const newArray: Array<FilterState> = [
            ...state.filters.slice(0, idx),
            newState,
            ...state.filters.slice(idx + 1),
        ];

        onChange({
            ...state,
            filters: newArray,
        });
    };

    const deleteFilter = (idx: number) => {
        const newArray: Array<FilterState> = [];

        for (let i = 0; i < state.filters.length; i++) {
            let ii = i;

            if (ii !== idx) {
                newArray.push(state.filters[ii]);
            }
        }

        onChange({
            ...state,
            filters: newArray,
        });
    };

    const deleteField = (idx: number) => {
        onChange({
            ...state,
            newFields: [...state.newFields.slice(0, idx), ...state.newFields.slice(idx + 1)],
        });
    };

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
                                    value={field.type}
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
                    {state.filters.map((filter, index) => (
                        <Filter
                            fields={dataset.fields}
                            filterState={filter!}
                            onChange={(newState) => onFilterChange(newState, index)}
                            key={index}
                            deleteFilter={() => deleteFilter(index)}
                        />
                    ))}
                    <button className="MergingDataset-add-filter" onClick={addFilter}>
                        Добавить фильтры
                    </button>

                    <div className="MergingDataset-fields-bottom-holder">
                        <div className="MergingDataset-fields">
                            {dataset.fields.map((field, index) => (
                                <DatasetField
                                    onClick={() => onFieldClick(dataset, field)}
                                    selected={selectedFields.every((fieldData) => field.id === fieldData.id)}
                                    name={field.id}
                                    value={field.type}
                                    key={field.id}
                                />
                            ))}
                            {state.newFields.map((field, idx) => (
                                <DatasetField
                                    onClick={() => onFieldClick(dataset, field)}
                                    selected={selectedFields.every((fieldData) => field.id === fieldData.id)}
                                    name={field.id}
                                    value={field.type}
                                    key={field.id}
                                    onDelete={() => {
                                        deleteField(idx);
                                    }}
                                />
                            ))}
                            <button
                                className={'MergingDataset-add' + (addRequest !== undefined ? ' inactive' : '')}
                                onClick={addRequest === undefined ? () => setAddRequest({ id: '' }) : undefined}
                            >
                                <Plus className="MergingDataset-plus" />
                            </button>
                        </div>
                    </div>

                    {addRequest !== undefined ? (
                        <MergingDatasetAddition
                            request={addRequest}
                            onChange={setAddRequest}
                            close={() => setAddRequest(undefined)}
                            submit={(newField) => {
                                setAddRequest(undefined);
                                onChange({
                                    ...state,
                                    newFields: [...state.newFields, newField],
                                });
                            }}
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
