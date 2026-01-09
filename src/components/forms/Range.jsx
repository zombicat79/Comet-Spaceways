function Range({ labelled, inputType, name, title, min, max }) {
    const inputId = name + '-field';

    return (
        <div>
            {labelled && <label htmlFor={inputId} >{title}</label>}
            <input id={inputId} name={name} type={inputType} min={min} max={max} />
            <output>30</output>
        </div>
    )
}

export default Range;