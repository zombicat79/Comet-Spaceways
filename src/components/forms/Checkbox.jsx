import { useState, useEffect, useRef } from 'react';

function Checkbox({ labelled, inputType, name, title, visible, readOnly, onChange, parentForm, defaultValues, formRules, superform, onSuperChange, superformAction }) {
    const [value, setValue] = useState(defaultValues[name]);
    const checkboxElement = useRef(null);
    const inputId = `${parentForm}-${name}`;
    console.log(value)

    function handleChange(changeType) {
        if (superform) {
            onSuperChange({ 
                type: superformAction, 
                payload: {id: parentForm, data: { field: name, value: !value, formRules }}
            });
        } else {
            onChange({ type: "toggle/check", payload: {field: name}});
        }

        if (changeType === 'subsequent') setValue((curr) => !curr);
    }

    useEffect(() => {
        if (superform && name === 'unaccompanied') {
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
                        ref={checkboxElement}
                        className="field__checkbutton"
                        type={inputType} 
                        name={name}
                        checked={value}
                        disabled={readOnly}
                        onChange={() => handleChange('subsequent')}
                    />
                </div>
                <p className="field__msg">Test message</p>
            </div>
        )
    }
    
    return null;
}

export default Checkbox;