import React from 'react';
import Input from '../Input';
import './style.css';

interface PendingCasesCardProps {
  caseNumber: string;
  agentName: string;
  problemDescription: string;
  onClose?: any;
  onDelete?: any;
  onCloseStatus?: any;
  onDescribe?: any;
}

const PendingCasesCard: React.FC<PendingCasesCardProps> = ({
  caseNumber,
  agentName,
  problemDescription,
  onClose,
  onDelete,
  onCloseStatus,
  onDescribe
}) => {
  return (
    <div id="pending-case-card">
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
        <textarea onChange={(e) => onDescribe(e)}></textarea>
        <select name="close-status" id="on-close-status" onChange={(e) => onCloseStatus(e)}>
          <option value="Solved">Solved</option>
          <option value="Not solved - Out of Scope">Not solved - Out of Scope</option>
          <option value="Not solved - Unfeasible">Not solved - Unfeasible</option>
        </select>
        <div className="action-buttons">
          <button className="close" onClick={onClose}>
            Close
          </button>
          <button className="delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingCasesCard;
