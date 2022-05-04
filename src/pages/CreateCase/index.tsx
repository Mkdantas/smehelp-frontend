import React, { useState } from 'react';
import Input from '../../components/Input';


import './style.css';

function CreateCase(){
  const [agent, setAgent] = useState('')
  const [caseNumber, setCaseNumber] = useState('');
  const [onCall, setOnCall] = useState(false);
  const [problemDescription, setProblemDescription] = useState('');


  const sendCase = async (e: any) =>{
    e.preventDefault();

    await fetch(`http://localhost:4000/cases`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "agent": agent,
      "case_number": caseNumber,
      "on_call": onCall,
      "problem_description": problemDescription,
      "status": 'unassigned',
      "problem_solution": '',
    })
  }).then((e) =>{
    console.log(e)
  });
  }

    return(
        <div id="create-case-page">
           <div className="create-case-form">
             <h1 className="create-case-form-title">Request help</h1>
             <form onSubmit={sendCase}>
                <Input name="caseNumber" label="Case number:" onChange={(e) => setCaseNumber(e.target.value)}/>
                <Input name="agent" label="Agent name:" onChange={(e) => setAgent(e.target.value)}/>
                <Input name="onCall" label="On call:" type="checkbox" onChange={(e) => setOnCall(!onCall)}/>
                <Input name="problemDescription" label="Describe your problem:" textarea={true}/>
                <textarea  value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)}/>
                <button type="submit">Send</button>
             </form>

           </div>
        </div>
    );
}

export default CreateCase;