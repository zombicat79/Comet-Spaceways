function Input({ labelled, inputType, name, title }) {
    const inputId = name + '-field';

    return (
        <div>
            {labelled && <label htmlFor={inputId} >{title}</label>}
            <input id={inputId} name={name} type={inputType} />
        </div>
    )
}

export default Input;