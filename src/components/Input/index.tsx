import React, { InputHTMLAttributes } from 'react';

import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    textarea?: boolean;

}

const Input: React.FC<InputProps> = ({ name, label, textarea, ...rest }) =>{
    return(
        <div className="input-block">
            <label>{label}</label>
            {textarea ? 
            <></> : <input id={name} {...rest} />}
            
        </div>
    )
}

export default Input;