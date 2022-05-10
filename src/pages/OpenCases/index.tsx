import React, { useEffect, useState } from 'react';
import OpenCasesCard from '../../components/OpenCasesCard';

import './style.css';

function OpenCases() {
  const [data, setData] = useState<any>([]);
  const [onCloseStatus, setOnCloseStatus] = useState('Solved');
  const [solutionDescription, setSolutionDescription] = useState('')

  const getOpenCases = async () => {
    await fetch(`${process.env.REACT_APP_API}/cases/open`, {
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
        "problem_solution": solutionDescription
      })
    }).then(() => getOpenCases())
  };

  const handlePending = async (id: string) => {
    await fetch(`${process.env.REACT_APP_API}/cases/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "status": 'pending'
      })
    }).then(() => getOpenCases())
  };

  const handleDelete = async (id: string) => {
    await fetch(`${process.env.REACT_APP_API}/cases/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => getOpenCases());
  };

  useEffect(() => {
    getOpenCases();   
  });

  return (
    <div id="open-cases-page">
      {data.map((item: any) => (
        <OpenCasesCard
          key={item.id}
          caseNumber={item.case_number}
          agentName={item.agent}
          problemDescription={item.problem_description}
          onClose={() => handleClose(item.id)}
          onDelete={() => handleDelete(item.id)}
          onPending={() => handlePending(item.id)}
          onCloseStatus={(e:any) => setOnCloseStatus(e.target.value)}
          onDescribe={(e:any) => setSolutionDescription(e.target.value)}
        />
      ))}
    </div>
  );
}

export default OpenCases;
