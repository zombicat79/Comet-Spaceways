function Checkbox({ labelled, inputType, name, title, visible, readOnly, onChange, parentForm, formState }) {
    const inputId = `${parentForm}-${name}`;

    function handleChange(e) {
        if (!(e.target.readOnly)) {
            onChange({ type: "toggle/check", payload: {field: name}})
        }
    }

    if (visible) {
        return (
            <div className="form__data-wrapper">
                <div className="field field--type-checkbox">
                    {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                    <input 
                        id={inputId}
                        className="field__checkbutton"
                        type={inputType} 
                        name={name}
                        checked={formState[parentForm][name]}
                        readOnly={readOnly}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <p className="field__msg">Test message</p>
            </div>
        )
    }
    
    return null;
}

export default Checkbox;