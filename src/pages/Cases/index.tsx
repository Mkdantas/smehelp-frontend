import React, { useEffect, useState } from 'react';
import CaseCard from '../../components/CaseCard';
import socketIOClient from 'socket.io-client';

import './style.css';
import { json } from 'stream/consumers';

function Cases() {
  const [data, setData] = useState<any>([]);
  const [socket, setSocket] = useState<any>();



  const getUnassigned = async () => {
    await fetch(`http://localhost:4000/cases/unassigned`, {
      method: 'GET'
    }).then((res:any) => res.json()).then((data:any) => setData(data));

  };

  const handleTake = async (id:string) =>{
    await fetch(`http://localhost:4000/cases/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "status": 'open'
      })
    }).then((res:any) => console.log(res))
  }
  //socket connection
  useEffect(() => {
      getUnassigned();
      if(!socket){
        setSocket(socketIOClient('http://localhost:4000'))
      }

      return () =>{
        socket?.disconnect();
      }
  }, [socket]);

  //socket events
  useEffect(() =>{
    if(!socket) return;

    socket.on('new_case', getUnassigned);
    socket.on('update', getUnassigned);

    return () =>{
      socket.off('new_case')
      socket.off('update')
    }
  })

  return (
    <div id="cases-page">
      {data.map((item: any) => (
        <CaseCard
          key={item.id}
          agentName={item.agent}
          caseNumber={item.case_number}
          onTake={() =>  handleTake(item.id)}
        />
      ))}
    </div>
  );
}

export default Cases;
