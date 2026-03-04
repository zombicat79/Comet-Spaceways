function RadioButton({ name, value, onChange, parentForm, formRules, superform, onSuperChange }) {
    const inputId = `${parentForm}-${name}-${value}-radio-button`;

    function handleChange(e) {
        if (superform) {
            onSuperChange({ 
                type: "cart/modifyPassengers", 
                payload: {id: parentForm, data: { field: name, value: e.target.value, formRules }}
            });
        } else {
            onChange({ type: "modify/field", payload: {field: name, value: e.target.value}});
        }
    }

    return (
        <div className="field__value-wrapper">
            <label htmlFor={inputId} className="field__value field__value--medium">{value}</label>
            <input id={inputId} className="field__radiobutton" name={name} type="radio" value={value} onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default RadioButton;