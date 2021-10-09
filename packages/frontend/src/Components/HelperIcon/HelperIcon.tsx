import React from 'react';

import './HelperIcon.scss';

interface HelperIconProps {
    isExpanded: boolean;
}

const HelperIcon: React.FC<HelperIconProps> = ({ isExpanded }) => {
    return (
        <svg
            width="47"
            height="53"
            viewBox="0 0 47 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={'HelperIcon' + (isExpanded ? ' expanded' : '')}
        >
            <path
                d="M16 2H38C41.866 2 45 5.13401 45 9V36C45 39.866 41.866 43 38 43H16C12.134 43 9 39.866 9 36V9C9 5.13401 12.134 2 16 2Z"
                fill="#FFFFFF"
                strokeWidth="4"
                className="HelperIcon-body"
            />
            <path
                d="M2 17V43.5C2 47.366 5.13401 50.5 9 50.5H32.5"
                strokeWidth="4"
                strokeLinecap="round"
                className="HelperIcon-body"
            />
            <line x1="19" y1="13" x2="26" y2="13" strokeWidth="4" strokeLinecap="round" stroke="#89B5F7" />
            <line x1="19" y1="23" x2="35" y2="23" strokeWidth="4" strokeLinecap="round" stroke="#89B5F7" />
            <line x1="19" y1="33" x2="35" y2="33" strokeWidth="4" strokeLinecap="round" stroke="#89B5F7" />
        </svg>
    );
};

export default HelperIcon;
