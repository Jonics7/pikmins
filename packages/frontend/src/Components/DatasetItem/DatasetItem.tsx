import React from 'react';
import './DatasetItem.scss';
import { ReactComponent as Document } from '../../Assets/Icons/document.svg';
import { ReactComponent as DocFilled } from '../../Assets/Icons/doc-filled.svg';
import Tag from '../Tag/Tag';

interface DatasetItemProps {
    small: boolean;
    title: string;
    price?: number;
    rows?: number;
    selected: boolean;
    onClick: () => void;
}

const DatasetItem: React.FC<DatasetItemProps> = ({ small, title, price, rows, selected, onClick }) => {
    return (
        <div className={'DatasetItem' + (!small ? ' big' : '')} onClick={onClick}>
            {selected ? <DocFilled className="DatasetItem-icon" /> : <Document className="DatasetItem-icon" />}
            {small ? (
                <div className="DatasetItem-info">
                    <div className="DatasetItem-info-title">{title}</div>
                    <div className="DatasetItem-info-price-holder">
                        <div className="DatasetItem-info-price">{price !== undefined ? '$' + price : ''}</div>
                        <div className="DatasetItem-info-rows">{rows !== undefined ? 'Rows:' + rows : ''}</div>
                    </div>
                </div>
            ) : (
                <div className="DatasetItem-info">
                    <div className="DatasetItem-info-row">
                        <div className="DatasetItem-info-title">{title}</div>
                        <div className="DatasetItem-info-price">{price !== undefined ? '$' + price : ''}</div>
                    </div>
                    <div className="DatasetItem-info-row">
                        <div className="DatasetItem-info-tags">
                            <Tag text="Financial" color="#E18080" />
                            <Tag text="Planner" color="#997EBB" />
                        </div>
                        <div className="DatasetItem-info-rows">{rows !== undefined ? 'Rows:' + rows : ''}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatasetItem;
