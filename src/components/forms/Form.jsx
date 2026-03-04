import useForm from './../../hooks/useForm';

import Input from './Input';
import Checkbox from './Checkbox';
import Range from './Range';
import RadioGroup from './RadioGroup';
import ChoiceList from './ChoiceList';

function Form({ id, formFields, defaultValues, formRules, superform, superformHandler, superformState }) {
    const { formState, dispatch } = useForm(id, defaultValues);
    console.log(formState)

    return (
        <form id={id} className="form" >
            {formFields.map((el, index) => {
                let content;
                let cssClasses = 'form-element';
                switch(el.type) {
                    case 'checkbox':
                        content = <Checkbox {...el.props} onChange={dispatch} parentForm={id} formState={formState} formRules={formRules} superform={superform} onSuperChange={superformHandler} superformState={superformState} />
                        cssClasses += ' form__element--full-width';
                        break;
                    case 'range':
                        content = <Range {...el.props} parentForm={id} />
                        break;
                    case 'radio':
                        content = <RadioGroup {...el.props} onChange={dispatch} parentForm={id} formState={formState} formRules={formRules} superform={superform} onSuperChange={superformHandler} />
                        cssClasses += ' form__element--full-width';
                        break;
                    case 'selector':
                        content = <ChoiceList {...el.props} onChange={dispatch} parentForm={id} formRules={formRules} superform={superform} onSuperChange={superformHandler} />
                        break;
                    default: // input
                        content = <Input {...el.props} onChange={dispatch} parentForm={id} formState={formState} formRules={formRules} superform={superform} onSuperChange={superformHandler} />
                }

                return <div key={`${id}-${el}-${index}`} className={cssClasses}>{content}</div>
            })}
        </form>
    )
}

export default Form;