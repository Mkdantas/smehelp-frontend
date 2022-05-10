import React, { useEffect, useState } from 'react';
import ClosedCasesCard from '../../components/ClosedCasesCard';

import './style.css';

function ClosedCases() {
  const [data, setData] = useState<any>([]);
  const [onCloseStatus, setOnCloseStatus] = useState('Solved');
  const [solutionDescription, setSolutionDescription] = useState('')

  const getClosedCases = async () => {
    await fetch(`${process.env.REACT_APP_API}/cases/closed`, {
      method: 'GET',
    })
      .then((res: any) => res.json())
      .then((data: any) => setData(data));
  };

  useEffect(() => {
    getClosedCases();   
  });

  return (
    <div id="closed-cases-page">
      {data.map((item: any) => (
        <ClosedCasesCard
          key={item.id}
          caseNumber={item.case_number}
          agentName={item.agent}
          problemDescription={item.problem_description}
          problemSolution={item.problem_solution}
          closedStatus={item.on_close_status}
        />
      ))}
    </div>
  );
}

export default ClosedCases;
