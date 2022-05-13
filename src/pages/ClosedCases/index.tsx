import React, { useEffect, useState } from 'react';
import ClosedCasesCard from '../../components/ClosedCasesCard';
import Load from '../../components/Load';

import './style.css';

function ClosedCases() {
  const [data, setData] = useState<any>([]);
  const [onCloseStatus, setOnCloseStatus] = useState('Solved');
  const [solutionDescription, setSolutionDescription] = useState('')
  const [loading, setLoading] = useState(true)

  const getClosedCases = async () => {
    await fetch(`${process.env.REACT_APP_API}/cases/closed`, {
      method: 'GET',
    })
      .then((res: any) => res.json())
      .then((data: any) => {
        setLoading(false)
        setData(data)
      });
  };

  useEffect(() => {
    getClosedCases();   
  });

  return (
    <div id="closed-cases-page">
      <div className="sme-filter">
      <div className="sme-filter-item">All</div>
        <div className="sme-filter-item active">Matheus Dantas</div>
        <div className="sme-filter-item">Caio Ferrari</div>
        <div className="sme-filter-item">José Delgado</div>
        <div className="sme-filter-item">Ricardo Gimenes</div>
        <div className="sme-filter-item">Jesus Navarro</div>
        <div className="sme-filter-item">Eric Pichai</div>
        <div className="sme-filter-item">William Sousa</div>
        <div className="sme-filter-item">Amanda Batista</div>
      </div>
      {loading? (  <Load text="searching for cases"/> ) : (<></>)}
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
