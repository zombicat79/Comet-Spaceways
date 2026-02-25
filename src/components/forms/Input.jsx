function Input({ labelled, inputType, name, title, onChange, parentForm, formState }) {
    const inputId = `${parentForm}-${name}`;

    function handleChange(e) {
        if (e.target.value !== formState[parentForm][name]) {
            onChange({ type: "modify/field", payload: {field: name, value: e.target.value}})
        }
    }

    return (
        <div className="form__data-wrapper">
            <div className="field">
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                <input 
                    id={inputId}
                    className="field__value field__value--medium"
                    type={inputType} 
                    name={name} 
                    onBlur={(e) => handleChange(e)} 
                />
            </div>
            <p className="field__msg">Test message</p>
        </div>
    )
}

export default Input;