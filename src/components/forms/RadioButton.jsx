function RadioButton({ name, value }) {
    const inputId = name + '-' + value + '-option';

    return (
        <div>
            <label htmlFor={inputId} >{value}</label>
            <input id={inputId} name={name} type="radio" />
        </div>
    )
}

export default RadioButton;