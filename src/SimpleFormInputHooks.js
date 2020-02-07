import React from 'react';
import useFormState from  './hooks/useFormState';

export default function SimpleFormInputHooks() {
    const [email, updateEmail, resetEmail] = useFormState("");
    return(
        <div>
            <h1>The value izzzz...</h1>
            <input type='text' value={email} onChange={updateEmail}/>
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}