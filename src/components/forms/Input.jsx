function Input({ labelled, inputType, name, title, onChange }) {
    const inputId = name + '-field';

    return (
        <div className="selector">
            {labelled && <label htmlFor={inputId} >{title}</label>}
            <input id={inputId} name={name} type={inputType} onChange={(e) => onChange({ type: "modify/field", payload: {field: inputId, value: e.target.value}})} />
        </div>
    )
}

export default Input;