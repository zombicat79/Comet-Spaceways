function Checkbox({ labelled, inputType, name, title, checked }) {
    const inputId = name + '-field';

    return (
        <div>
            {labelled && <label htmlFor={inputId} >{title}</label>}
            <input id={inputId} name={name} type={inputType} checked={checked} />
        </div>
    )
}

export default Checkbox;