function RadioButton({ name, value, onSelect, parentForm, selectedOption }) {
    const inputId = `${parentForm}-${name}-${value}-radio-button`;
    const checked = selectedOption === value ? true : false;

    return (
        <div className="field__value-wrapper">
            <label htmlFor={inputId} className="field__value field__value--medium">{value}</label>
            <input id={inputId} className="field__radiobutton" type="radio" value={value} onChange={(e) => onSelect(e)} checked={checked} />
        </div>
    )
}

export default RadioButton;