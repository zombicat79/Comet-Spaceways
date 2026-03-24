import { useState } from 'react';

import SvgIcon from './../SvgIcon';

import { errorChecker } from "./error-checker";

function Input({ labelled, inputType, valueOutput, name, title, onChange, parentForm, formRules, superform, onSuperChange, superformAction }) {
    const [errorMsg, setErrorMsg] = useState('');
    const [passwordIconState, setPasswordIconState] = useState('invisible');
    const [inputMode, setInputMode] = useState(inputType)
    const inputId = `${parentForm}-${name}`;
    const securedFields = ['password', 'repassword'];

    function handleChange(e) {
        const check = errorChecker(name, e.target.value, formRules);
        if (superform) {
            onSuperChange({ 
                type: superformAction, 
                payload: {id: parentForm, data: { field: name, value: e.target.value, formRules }}
            });
        } else {
            onChange({ type: "modify/field", payload: {field: name, value: e.target.value}});
        }
        setErrorMsg(check.message);
    }

    function handlePasswordIcon() {
        passwordIconState === 'invisible' ? setPasswordIconState('visible') : setPasswordIconState('invisible');
        inputMode === 'text' ? setInputMode('password') : setInputMode('text');
    }

    return (
        <div className="form__data-wrapper">
            <div className={errorMsg === '' ? 'field' : 'field field--error'}>
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                <input 
                    id={inputId}
                    className={`field__value field__value--medium field__value--${valueOutput}`}
                    type={inputMode} 
                    name={name} 
                    onBlur={(e) => handleChange(e)} 
                />
                {securedFields.includes(name) && (passwordIconState === 'invisible' 
                    ? <div onClick={handlePasswordIcon}><SvgIcon design='eye' /></div>
                    : <div onClick={handlePasswordIcon}><SvgIcon design='eye-shut' /></div>
                )}
            </div>
            {errorMsg !== '' && <p className="field__msg">{errorMsg}</p>}
        </div>
    )
}

export default Input;