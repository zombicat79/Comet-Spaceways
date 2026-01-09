import Input from "./Input";
import Checkbox from "./Checkbox";
import Range from "./Range";
import RadioGroup from "./RadioGroup";

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
                <form>
                    <Input labelled={true} inputType="text" name="name" title="First Name" />
                    <Input labelled={true} inputType="text" name="surname" title="Last Name" />
                    <Checkbox labelled={true} inputType="checkbox" name="contact" title="Contact this passenger" />
                    <Checkbox labelled={true} inputType="checkbox" name="billing" title="Bill this passenger" />
                    <Range labelled={true} inputType="range" name="age" title="Age" min="18" max="150" />
                    <RadioGroup 
                        labelled={true} 
                        name="race" 
                        title="Build" 
                        options={[{ value: 'organic' }, { value: 'cyborg' }, { value: 'android' }]} 
                    />
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

    return (
        <section>
            <p>#{occurrence}</p>
            {content}
        </section>
    )
}

export default Form;