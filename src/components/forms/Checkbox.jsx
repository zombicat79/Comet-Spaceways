import { useState, useEffect } from 'react';

import { errorChecker } from "./error-checker";

function Checkbox({ labelled, inputType, name, title, visible, readOnly, onChange, parentForm, defaultValues, formRules, superform, onSuperChange, superformAction }) {
    const [value, setValue] = useState(defaultValues[name]);
    const [errorMsg, setErrorMsg] = useState('');
    const inputId = `${parentForm}-${name}`;

    function handleChange(changeType) {
        const newValue = changeType === 'initial' ? value : !value;
        const check = errorChecker(name, newValue, formRules);

        if (superform) {
            onSuperChange({ 
                type: superformAction, 
                payload: {id: parentForm, data: { field: name, value: newValue, formRules }}
            });
        } else {
            onChange({ type: "toggle/check", payload: {field: name}});
        }

        setValue(newValue);
        setErrorMsg(check.message);
    }

    useEffect(() => {
        if (superform) {
            handleChange('initial');
        }
    }, [])

    if (visible) {
        return (
            <div className="form__data-wrapper">
                <div className="field field--type-checkbox">
                    {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                    <input 
                        id={inputId}
                        className="field__checkbutton"
                        type={inputType} 
                        checked={value}
                        disabled={readOnly}
                        onChange={() => handleChange('subsequent')}
                    />
                </div>
                {errorMsg !== '' && <p className="field__msg">{errorMsg}</p>}
                <input className="field__value field__value--hidden" type="hidden" name={name} value={value} />
            </div>
        )
    }
    
    return null;
}

export default Checkbox;