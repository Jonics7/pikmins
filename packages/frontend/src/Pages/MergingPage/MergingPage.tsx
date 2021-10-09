import React, { useState } from 'react';
import './MergingPage.scss';

const MergingPage: React.FC = () => {
    const [result, setResult] = useState<string>('');

    return (
        <div className="MergingPage">
            <div className="MergingPage-layout">
                <div className="MergingPage-datasets"></div>
                <div className="MergingPage-controls">
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">Телефон</div>
                    </div>
                    <div className="MergingPage-controls-field">
                        <div className="MergingPage-controls-field-text">Телефон</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MergingPage;
