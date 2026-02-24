import useForm from './../../hooks/useForm';

import Input from './../forms/Input';
import Checkbox from './../forms/Checkbox';
import Range from './../forms/Range';
import RadioGroup from './../forms/RadioGroup';
import Selector from './../Selector';

function Form({ id, formFields }) {
    const { formState, dispatch } = useForm(id);
    console.log(formState)

    return (
        <form id={id} className="form" >
            {formFields.map((el, index) => {
                let content;
                switch(el.type) {
                    case 'checkbox':
                        content = <Checkbox {...el.props} />
                        break;
                    case 'range':
                        content = <Range {...el.props} />
                        break;
                    case 'radio':
                        content = <RadioGroup {...el.props} />
                        break;
                    case 'selector':
                        content = <Selector {...el.props} />
                        break;
                    default: // input
                        content = <Input {...el.props} onChange={dispatch} />
                }

                return <div key={`${id}-${el}-${index}`}>{content}</div>
            })}
        </form>
    )
}

export default Form;