import React, { useEffect, useState } from 'react';
import CaseCard from '../../components/CaseCard';
import socketIOClient from 'socket.io-client';

import './style.css';

function Cases(){
    const [data, setData] = useState<any>([])

    const addCaseCard = (newData:any) =>{
        console.log(newData)
        var oldData = data;
        setData([...oldData, newData])
    }

    const socket = socketIOClient('http://localhost:4000')
    useEffect(() =>{
        socket.off('new_case', addCaseCard).on('new_case', addCaseCard)
    }, [])
    return (
    <div id="cases-page">
        {data? data.map((item:any) =>{
            return(
                <CaseCard key={item.id} agentName={item.agent} caseNumber={item.case_number}/>
            )
        }): <></>}
     </div>
    )
}

export default Cases;