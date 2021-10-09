import React from 'react';
import './Helper.scss';
import HelperIcon from '../HelperIcon/HelperIcon';

interface HelperProps {
    isExpanded: boolean;
    handleHelper: () => void;
}

const Helper: React.FC<HelperProps> = ({ isExpanded, handleHelper }) => {
    return (
        <div onClick={handleHelper} className={`Helper${isExpanded ? ' expanded' : ''}`}>
            <HelperIcon isExpanded={isExpanded} />
            {isExpanded ? <div className="Helper-text">Рабочая область</div> : null}
        </div>
    );
};

export default Helper;
