import RadioButton from "./RadioButton";

function RadioGroup({ labelled, name, title, options }) {
    return (
        <div>
            {labelled && <label>{title}</label>}
            {options.map((option) => {
                return <RadioButton key={option.value} name={name} value={option.value} />
            })}
        </div>
    )
}

export default RadioGroup;