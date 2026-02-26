import RadioButton from "./RadioButton";

function RadioGroup({ labelled, name, title, options, onChange, parentForm }) {
    const inputId = `${parentForm}-${name}`;

    return (
        <div className="form__data-wrapper">
            <div className="field">
                {labelled && <label htmlFor={inputId} className="field__id">{title}</label>}
                <ul className="field__choice-wrapper">
                    {options.map((option) => {
                        return (
                            <li key={`${inputId}-${option}`} className="field__choice">
                                <RadioButton name={name} value={option} onChange={onChange} parentForm={parentForm} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        <p className="field__msg">Test message</p>
    </div>
    )
}

export default RadioGroup;