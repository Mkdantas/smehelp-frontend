import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import OpenCaseCard from '../../components/OpenCaseCard';

import './style.css';

function OpenCases() {
  const [data, setData] = useState<any>([]);
  const [socket, setSocket] = useState<any>();
  console.log();

  const getOpenCases = async () => {
    await fetch(`${process.env.REACT_APP_API}/cases/open`, {
      method: 'GET',
    })
      .then((res: any) => res.json())
      .then((data: any) => setData(data));
  };

  const handleClose = async (id: string) => {
   
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
        <OpenCaseCard
          key={item.id}
          caseNumber={item.case_number}
          agentName={item.agent}
          problemDescription={item.problem_description}
          onClose={() => handleClose(item.id)}
          onDelete={() => handleDelete(item.id)}
          onPending={() => handlePending(item.id)}
        />
      ))}
    </div>
  );
}

export default OpenCases;
