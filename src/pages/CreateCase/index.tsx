import React from 'react';
import Input from '../../components/Input';

import './style.css';

function CreateCase(){
    return(
        <div id="create-case-page">
           <div className="create-case-form">
             <h1 className="create-case-form-title">Request help</h1>
             <form>
                <Input name="caseNumber" label="Case number:" value=""/>
                <Input name="agent" label="Agent name:" value=""/>
                <Input name="onCall" label="On call:" value="" type="checkbox"/>
                <Input name="problemDescription" label="Describe your problem:" value="" textarea={true}/>
             </form>
           </div>
        </div>
    );
}

export default CreateCase;