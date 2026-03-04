import { useState } from 'react';
import RadioButton from "./RadioButton";
import errorChecker from "./error-checker";

function RadioGroup({ labelled, name, title, options, onChange, parentForm, formState, formRules, superform, onSuperChange }) {
    const [errorMsg, setErrorMsg] = useState('');
    const inputId = `${parentForm}-${name}`;

    function checkNoSelection() {
        const check = errorChecker(name, formState[parentForm][name], formRules);
        setErrorMsg(check.message);
    }

    return (
        <div className="form__data-wrapper" tabIndex="0" onBlur={checkNoSelection}>
            <div className={errorMsg === '' ? 'field' : 'field field--error'}>
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                <ul className="field__choice-wrapper">
                    {options.map((option) => {
                        return (
                            <li key={`${inputId}-${option}`} className="field__choice">
                                <RadioButton name={name} value={option} onChange={onChange} parentForm={parentForm} formRules={formRules} superform={superform} onSuperChange={onSuperChange} />
                            </li>
                        )
                    })}
                </ul>
            </div>
            {errorMsg !== '' && <p className="field__msg">{errorMsg}</p>}
        </div>
    )
}

export default RadioGroup;