import { useState } from 'react';

import errorChecker from "./error-checker";

function Input({ labelled, inputType, name, title, onChange, parentForm, formState, formRules }) {
    const [errorMsg, setErrorMsg] = useState('');
    const inputId = `${parentForm}-${name}`;

    function handleChange(e) {
        if (e.target.value !== formState[parentForm][name]) {
            const check = errorChecker(name, e.target.value, formRules);
            if (check.status === 'ok') {
                onChange({ type: "modify/field", payload: {field: name, value: e.target.value}});
            } 
            setErrorMsg(check.message);
        }
    }

    return (
        <div className="form__data-wrapper">
            <div className={errorMsg === '' ? 'field' : 'field field--error'}>
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                <input 
                    id={inputId}
                    className="field__value field__value--medium"
                    type={inputType} 
                    name={name} 
                    onBlur={(e) => handleChange(e)} 
                />
            </div>
            {errorMsg !== '' && <p className="field__msg">{errorMsg}</p>}
        </div>
    )
}

export default Input;