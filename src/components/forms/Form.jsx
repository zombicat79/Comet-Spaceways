import Input from "./Input";
import Checkbox from "./Checkbox";
import Range from "./Range";
import RadioGroup from "./RadioGroup";
import Selector from "./../Selector";

function Form({ type, occurrence }) {
    let content;

    switch(type) {
        case "nhes":
            content = <form><p>This is a form</p></form>
        case "minors":
            content = <form><p>This is a form</p></form>
        case "pets":
            content = <form><p>This is a form</p></form>
        default: // humanoids
            content = (
                <form className="form">
                    <Input labelled={true} inputType="text" name="name" title="First Name" />
                    <Input labelled={true} inputType="text" name="surname" title="Last Name" />
                    <Range labelled={true} inputType="range" name="age" title="Age" min="18" max="150" />
                    <Selector
                        type="regular"
                        identifier="Voyage-Type"
                        initialValue="Earthling"
                        choiceOptions={['Earthling', 'Selenyte', 'Martian', 'Venusian', 'Belter', 'Saturnian', 'Other...']}
                    />
                    <RadioGroup 
                        labelled={true} 
                        name="race" 
                        title="Build" 
                        options={[{ value: 'organic' }, { value: 'cyborg' }, { value: 'android' }]} 
                    />
                    <Checkbox labelled={true} inputType="checkbox" name="contact" title="Contact this passenger" checked={occurrence === 1 ? true : false} />
                    <Checkbox labelled={true} inputType="checkbox" name="billing" title="Bill this passenger" checked={occurrence === 1 ? true : false} />
                    <select name="nationality">
                        <option value="1">Selenyte</option>
                        <option value="2">Earthling</option>
                        <option value="3">Martian</option>
                        <option value="4">Venusian</option>
                        <option value="5">Belter</option>
                        <option value="6">Saturnian</option>
                        <option value="7">Other</option>
                    </select>
                </form>
            )
    }

    return content;
}

export default Form;