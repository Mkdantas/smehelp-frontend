import React, { useEffect, useState } from 'react';
import PendingCasesCard from '../../components/PendingCasesCard';
import relax from '../../assets/icons/relax.svg';

import './style.css';

function PendingCases() {
  const [data, setData] = useState<any>([]);
  const [onCloseStatus, setOnCloseStatus] = useState('Solved');
  const [solutionDescription, setSolutionDescription] = useState('')

  const getPendingCases = async () => {
    await fetch(`${process.env.REACT_APP_API}/cases/pending`, {
      method: 'GET',
    })
      .then((res: any) => res.json())
      .then((data: any) => setData(data));
  };

  const handleClose = async (id: string) => {
    await fetch(`${process.env.REACT_APP_API}/cases/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "status": 'closed',
        "problem_solution": solutionDescription,
        "on_close_status": onCloseStatus
      })
    }).then(() => getPendingCases())
  };

  const handleDelete = async (id: string) => {
    await fetch(`${process.env.REACT_APP_API}/cases/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => getPendingCases());
  };

  useEffect(() => {
    getPendingCases();   
  });

  return (
    <div id="pending-cases-page">
      {data[0]? data.map((item: any) => (
        <PendingCasesCard
          key={item.id}
          caseNumber={item.case_number}
          agentName={item.agent}
          problemDescription={item.problem_description}
          onClose={() => handleClose(item.id)}
          onDelete={() => handleDelete(item.id)}
          onCloseStatus={(e:any) => setOnCloseStatus(e.target.value)}
          onDescribe={(e:any) => setSolutionDescription(e.target.value)}
        />
      )): (
        <div className="no-cases">
        <img src={relax}/>
        <h2>No cases at the moment.</h2>
        </div>
      )}
    </div>
  );
}

export default PendingCases;
