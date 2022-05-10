import React, { useState } from 'react';
import Input from '../Input';
import './style.css';

interface ClosedCasesCardProps {
  caseNumber: string;
  agentName: string;
  problemDescription: string;
  problemSolution: string;
  closedStatus: string;
}

const ClosedCasesCard: React.FC<ClosedCasesCardProps> = ({
  caseNumber,
  agentName,
  problemDescription,
  problemSolution,
  closedStatus,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="closed-case-card" className={closedStatus == 'Solved' ? closedStatus : 'not-solved'} onClick={() => setIsOpen(!isOpen)}>
      <div className="labels">
        <p className="case-label">Case:</p>
        {isOpen && (
          <>
            <p className="agent-label">Agent:</p>
            <p className="problem-description-label">Problem Description:</p>
          </>
        )}
      </div>
      <div className="infos">
        <p className="case-info">{caseNumber}</p>

        {isOpen && (
          <>
            <p className="agent-info">{agentName}</p>
            <p className="agent-info">{problemDescription}</p>
          </>
        )}
      </div>
      {!isOpen && (
        <>
          <div className="labels">
            <p className="agent-label">Agent:</p>
          </div>
          <div className="infos">
            <p className="agent-info">{agentName}</p>
          </div>
        </>
      )}
      <div className="labels">
        <p>status:</p>
        {isOpen && <p className="problem-solution-label">Problem Solution:</p>}
      </div>
      <div className="infos">
        <p>{closedStatus}</p>
        {isOpen && <p className="agent-info">{problemSolution}</p>}
      </div>
    </div>
  );
};

export default ClosedCasesCard;
