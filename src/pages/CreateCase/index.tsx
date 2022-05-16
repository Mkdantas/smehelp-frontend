import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Load from '../../components/Load';

import './style.css';


function CreateCase() {
  const [agent, setAgent] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [onCall, setOnCall] = useState(false);
  const [problemDescription, setProblemDescription] = useState('');
  const [caseType, setCaseType] = useState('SME');
  const [formSent, setFormSent] = useState(false);
  const navigate = useNavigate();
  const sendCase = async (e: any) => {
    e.preventDefault();
    setFormSent(true);
    await fetch(`${process.env.REACT_APP_API}/cases`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent: 'ledossantos',
        case_number: caseNumber,
        on_call: onCall,
        problem_description: problemDescription,
        status: 'unassigned',
        problem_solution: '',
        sme: 'matheusdantas',
        type: caseType,
      }),
    }).then(() => {
      navigate("/cases/unassigned")
    });
  };

  return (
    <div id="create-case-page">
      <div className="create-case-form">
        <h1 className="create-case-form-title">Request help</h1>
      {formSent ? (<Load text="Thank you for your request, redirecting to queue..."/>) : (
        <form onSubmit={sendCase}>
          <Input
            name="caseNumber"
            label="Case number:"
            onChange={(e) => setCaseNumber(e.target.value)}
          />
          <Input name="agent" label="Agent name:" textarea={true} />
          <select
            name="case-type"
            className="case-type"
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="SME">SME</option>
            <option value="QA">
              QA
            </option>
            <option value="TL">
              TL
            </option>
          </select>
          <Input
            name="onCall"
            label="On call:"
            type="checkbox"
            onChange={() => setOnCall(!onCall)}
          />
          <Input
            name="problemDescription"
            label="Describe your problem:"
            textarea={true}
          />
          <textarea
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        )}
      </div>
    </div>
  );
}

export default CreateCase;
