import { useState, useEffect } from 'react';
import useSelectorTool from './../../hooks/useSelectorTool';

function ChoiceList({ labelled, name, title, options, onChange, parentForm }) {
    const [open, setOpen] = useState(false);
    const { selectionValue, handleSelection } = useSelectorTool('N/A');
    const inputId = `${parentForm}-${name}`;

    useEffect(() => {
        onChange({ type: "modify/field", payload: {field: name, value: selectionValue}})
    }, [selectionValue])

    return (
        <div className="form__data-wrapper">
            <div id={inputId} className="field" tabIndex="0" onClick={() => setOpen((curr) => !curr)} onBlur={() => setOpen(false)}>
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
            </div>
            <p className="field__msg">Test message</p>
        </div>
    )
}

export default ChoiceList;