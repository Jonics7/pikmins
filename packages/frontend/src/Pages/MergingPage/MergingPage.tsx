import React, { useState } from 'react';
import './MergingPage.scss';
import { ReactComponent as Arrow } from '../../Assets/Icons/bottom-arrow.svg';
import Dropdown from '../../Components/Dropdown/Dropdown';
import MergingDataset from '../../Components/MergingDataset/MergingDataset';

const MergingPage: React.FC = () => {
    const [fields, setFields] = useState<Array<string>>(['Телефон', 'Телефон']);
    const [result, setResult] = useState<string>('Financial Advisors Combination');

    return (
        <div className="MergingPage">
            <div className="MergingPage-layout">
                <div className="MergingPage-datasets">
                    <MergingDataset />
                </div>
                <div className="MergingPage-controls">
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">{fields[0]}</div>
                    </div>
                    <Dropdown />
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">{fields[1]}</div>
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
