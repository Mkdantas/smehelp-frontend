import React from 'react';

import './style.css';
import load from '../../assets/icons/load.gif';

interface loadProps{
text: string;
}

const Load:React.FC<loadProps> = ({text}) =>{
    return (
        <div id="load">
        <h3>{text}</h3>
        <img src={load}/>
        </div>
    )
}

export default Load;