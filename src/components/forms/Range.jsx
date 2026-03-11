import { useState, useEffect } from 'react';

import { errorChecker } from "./error-checker";

function Range({ labelled, inputType, name, title, min, max, parentForm, onChange, defaultValues, formRules, superform, onSuperChange, superformAction }) {
    const [selectedValue, setSelectedValue] = useState(defaultValues[name]);
    const [errorMsg, setErrorMsg] = useState('');
    const inputId = `${parentForm}-${name}`;

    function handleErrors(value) {
        const check = errorChecker(name, Number(value), formRules);
        setErrorMsg(check.message);
    }

    function handleChange(e) {
        if (superform) {
            onSuperChange({ 
                type: superformAction, 
                payload: {id: parentForm, data: { field: name, value: Number(e.target.value), formRules }}
            });
        } else {
            onChange({ type: "modify/field", payload: {field: name, value: Number(e.target.value)}});
        }
        handleErrors(Number(e.target.value));
        setSelectedValue(e.target.value);
    }

    useEffect(() => {
        handleErrors(Number(selectedValue));
    }, [])

    return (
        <div className="form__data-wrapper">
            <div className="field field--range">
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                <div className="field__data-wrapper">
                    <input 
                        id={inputId}
                        className="rangebar"
                        type={inputType} 
                        min={min} 
                        max={max}
                        value={selectedValue}
                        onChange={(e) => handleChange(e)}
                    />
                    <input className="field__value field__value--hidden" type="hidden" name={name} value={selectedValue} />
                    <output className={errorMsg === '' ? 'output' : 'output output--error'}>{selectedValue}</output>
                </div>
            </div>
            {errorMsg !== '' && <p className="field__msg">{errorMsg}</p>}
        </div>
    )
}

export default Range;