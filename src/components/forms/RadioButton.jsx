function RadioButton({ name, value, onChange, parentForm }) {
    const inputId = `${parentForm}-${name}-${value}-radio-button`;

    function handleChange(e) {
        onChange({ type: "modify/field", payload: {field: name, value: e.target.value}})
    }

    return (
        <div className="field__value-wrapper">
            <label htmlFor={inputId} className="field__value field__value--medium">{value}</label>
            <input id={inputId} className="field__radiobutton" name={name} type="radio" value={value} onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default RadioButton;