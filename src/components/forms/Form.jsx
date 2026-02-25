import useForm from './../../hooks/useForm';

import Input from './Input';
import Checkbox from './Checkbox';
import Range from './Range';
import RadioGroup from './RadioGroup';
import ChoiceList from './ChoiceList';

function Form({ id, formFields, defaultValues }) {
    const { formState, dispatch } = useForm(id, defaultValues);
    console.log(formState)

    return (
        <form id={id} className="form" >
            {formFields.map((el, index) => {
                let content;
                switch(el.type) {
                    case 'checkbox':
                        content = <Checkbox {...el.props} parentForm={id} />
                        break;
                    case 'range':
                        content = <Range {...el.props} parentForm={id} />
                        break;
                    case 'radio':
                        content = <RadioGroup {...el.props} parentForm={id} />
                        break;
                    case 'selector':
                        content = <ChoiceList {...el.props} onChange={dispatch} parentForm={id} />
                        break;
                    default: // input
                        content = <Input {...el.props} onChange={dispatch} parentForm={id} formState={formState} />
                }

                return <div key={`${id}-${el}-${index}`} className="form__element">{content}</div>
            })}
        </form>
    )
}

export default Form;