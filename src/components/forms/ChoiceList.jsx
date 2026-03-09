import { useState, useEffect } from 'react';
import useSelectorTool from './../../hooks/useSelectorTool';

import { errorChecker } from "./error-checker";

function ChoiceList({ labelled, name, title, options, onChange, parentForm, formRules, superform, onSuperChange, superformAction }) {
    const [open, setOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { selectionValue, handleSelection } = useSelectorTool('N/A');
    const inputId = `${parentForm}-${name}`;

    function closeList() {
        const check = errorChecker(name, selectionValue, formRules);
        setOpen(false)
        setErrorMsg(check.message);
    }

    useEffect(() => {
        const check = errorChecker(name, selectionValue, formRules);
        if (superform) {
            onSuperChange({ 
                type: superformAction, 
                payload: {id: parentForm, data: { field: name, value: selectionValue, formRules }}
            });
        } else {
            onChange({ type: "modify/field", payload: {field: name, value: selectionValue}});
        }

        if (selectionValue !== 'N/A') {
            setErrorMsg(check.message);
        }
    }, [selectionValue])

    return (
        <div className="form__data-wrapper">
            <div id={inputId} className={errorMsg === '' ? 'field' : 'field field--error'} tabIndex="0" onClick={() => setOpen((curr) => !curr)} onBlur={closeList}>
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                {open && <div className="field__list">
                    {options?.map((el, index) => {
                        return (
                            <span 
                                key={el + index}
                                id={el} 
                                className="field__option"
                                onClick={(e) => handleSelection(e.target, inputId)}
                            >
                                {el}
                            </span>
                        )
                    })}
                </div>}
                <span className="field__value field__value--medium">{selectionValue}</span>
                <input className="field__value field__value--hidden" type="hidden" name={name} value={selectionValue} />
            </div>
            {errorMsg !== '' && <p className="field__msg">{errorMsg}</p>}
        </div>
    )
}

export default ChoiceList;