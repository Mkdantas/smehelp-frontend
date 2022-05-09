import React from 'react';
import './style.css'

interface UnassignedCaseCardProps {
    caseNumber: string;
    agentName: string;
    onTake?: any
}

const UnassignedCaseCard: React.FC<UnassignedCaseCardProps> = ({caseNumber, agentName, onTake}) => {
    return (
    <div id="unassigned-case-card">
        <div className="avatar">
            <div>
                M
            </div>
        </div>
        <div className="labels">
            <p className="case-label">Case:</p>
            <p className="agent-label">Agent:</p>
        </div>
        <div className="infos">
            <p className="case-info">{caseNumber}</p>
            <p className="agent-info">{agentName}</p>
        </div>
        <div className="take-button">
            <button onClick={onTake}>Take</button>
        </div>
    </div>
    )
}

export default UnassignedCaseCard;