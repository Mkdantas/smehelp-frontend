import React, { useEffect, useState } from 'react';
import CaseCard from '../../components/CaseCard';
import socketIOClient from 'socket.io-client';

import './style.css';

function Cases() {
  const [data, setData] = useState<any>([]);



  const fetchUnassigned = async () => {
    await fetch(`http://localhost:4000/cases/unassigned`, {
      method: 'GET'
    }).then((res:any) => res.json()).then((data:any) => setData(data));

  };
  const socket = socketIOClient('http://localhost:4000');
  useEffect(() => {
      socket.on('new_case', fetchUnassigned)


  }, []);
  return (
    <div id="cases-page">
      {data.map((item: any) => (
        <CaseCard
          key={item.id}
          agentName={item.agent}
          caseNumber={item.case_number}
        />
      ))}
    </div>
  );
}

export default Cases;
