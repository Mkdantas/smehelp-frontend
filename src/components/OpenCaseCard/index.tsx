import React from 'react';
import Input from '../Input';
import './style.css';

interface OpenCaseCardProps {
  caseNumber: string;
  agentName: string;
  problemDescription: string;
  onClose?: any;
  onPending?: any;
  onDelete?: any;
}

const OpenCaseCard: React.FC<OpenCaseCardProps> = ({
  caseNumber,
  agentName,
  problemDescription,
  onClose,
  onPending,
  onDelete,
}) => {
  return (
    <div id="open-case-card">
      <div className="avatar">
        <div>M</div>
      </div>
      <div className="labels">
        <p className="case-label">Case:</p>
        <p className="agent-label">Agent:</p>
        <p className="problem-description-label">Problem Description:</p>
      </div>
      <div className="infos">
        <p className="case-info">{caseNumber}</p>
        <p className="agent-info">{agentName}</p>
        <p className="agent-info">{problemDescription}</p>
      </div>
      <div className="action">
        <Input textarea={true} name="Solution" label="Describe solution:" />
        <textarea></textarea>
        <div className="action-buttons">
          <button className="close" onClick={onClose}>
            Close
          </button>
          <button className="pending" onClick={onPending}>
            Pending
          </button>
          <button className="delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenCaseCard;
