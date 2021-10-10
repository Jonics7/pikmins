import React from 'react';
import { FieldType as Field } from '../../Pages/MergingPage/MergingPage';
import { FieldType } from 'common';
import Dropdown from '../Dropdown/Dropdown';

export interface AddRequest {
    id: string;
    action?: string;
    item1?: string;
    item2?: string;
}

export interface NewFieldType {
    id: string;
    type: FieldType;
    action: string;
    item1: string;
    item2: string;
}

export interface MergingDatasetAdditionProps {
    fields: Field[];
    request: AddRequest;
    onChange: (newState: AddRequest) => void;
    close: () => void;
    submit: (newState: NewFieldType) => void;
}

const MergingDatasetAddition: React.FC<MergingDatasetAdditionProps> = ({
    request,
    onChange,
    close,
    fields,
    submit,
}) => {
    const isValid = (request.action && request.item1 && request.item2 && true) || false;

    return (
        <div className="MergingDataset-addition">
            <div className="MergingDataset-addition-left">
                <div className="MergingDataset-addition-info">
                    <div className="MergingDataset-addition-info-top">Действие</div>
                    <div className="MergingDataset-addition-info-bottom">
                        <Dropdown
                            items={['Промежуток', 'Разница', 'Среднее']}
                            value={request.action}
                            placeholder="Выберите действие"
                            onItemChange={(action) => {
                                onChange({
                                    ...request,
                                    action,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="MergingDataset-addition-info">
                    <div className="MergingDataset-addition-info-top">Название</div>
                    <div className="MergingDataset-addition-info-bottom">
                        <input
                            type="text"
                            className="MergingDataset-addition-info-input"
                            placeholder="Название"
                            onChange={(e) =>
                                onChange({
                                    ...request,
                                    id: e.target.value,
                                })
                            }
                            value={request.id}
                        />
                    </div>
                </div>
            </div>
            <div className="MergingDataset-addition-right">
                <div className="MergingDataset-addition-fields">
                    <div className="MergingDataset-addition-fields-title">Поля</div>
                    <div className="MergingDataset-addition-fields-body">
                        <Dropdown
                            items={fields.map((f) => f.id)}
                            placeholder="Поле 1"
                            onItemChange={(item1) => {
                                onChange({ ...request, item1 });
                            }}
                            value={request.item1}
                        />
                        <Dropdown
                            items={fields.map((f) => f.id)}
                            placeholder="Поле 2"
                            onItemChange={(item2) => {
                                onChange({ ...request, item2 });
                            }}
                            value={request.item2}
                        />
                    </div>
                </div>
                <div className="MergingDataset-addition-buttons">
                    <button className="MergingDataset-addition-button" onClick={close}>
                        Отмена
                    </button>
                    <button
                        className="MergingDataset-addition-button blue"
                        onClick={
                            isValid
                                ? () =>
                                      submit({
                                          id: request.id,
                                          action: request.action!,
                                          type: fields.find((f) => f.id === request.item1)!.type,
                                          item1: request.item1!,
                                          item2: request.item2!,
                                      })
                                : undefined
                        }
                    >
                        ОК
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MergingDatasetAddition;
