import { useEffect, useRef } from 'react';

import useForm from './../../hooks/useForm';

import Input from './Input';
import Checkbox from './Checkbox';
import Range from './Range';
import RadioGroup from './RadioGroup';
import ChoiceList from './ChoiceList';

function Form({ id, formFields, defaultValues, formRules, superform, superformHandler, superformAction, onFormAdd }) {
    const { formState, dispatch } = useForm(id, defaultValues);
    const formElement = useRef(null);

    useEffect(() => {
        onFormAdd(formElement.current);
    }, [])

    return (
        <form id={id} className="form" ref={formElement} >
            {formFields.map((el, index) => {
                let content;
                let cssClasses = 'form-element';
                switch(el.type) {
                    case 'checkbox':
                        content = <Checkbox 
                            {...el.props} 
                            onChange={dispatch} 
                            parentForm={id} formState={formState}
                            defaultValues={defaultValues} 
                            formRules={formRules} 
                            superform={superform} 
                            onSuperChange={superformHandler}
                            superformAction={superformAction} />
                        cssClasses += ' form__element--full-width';
                        break;
                    case 'range':
                        content = <Range {...el.props} parentForm={id} />
                        break;
                    case 'radio':
                        content = <RadioGroup 
                            {...el.props} 
                            onChange={dispatch} 
                            parentForm={id}  
                            formRules={formRules} 
                            superform={superform} 
                            onSuperChange={superformHandler}
                            superformAction={superformAction} />
                        cssClasses += ' form__element--full-width';
                        break;
                    case 'selector':
                        content = <ChoiceList 
                            {...el.props} 
                            onChange={dispatch} 
                            parentForm={id} 
                            formRules={formRules} 
                            superform={superform} 
                            onSuperChange={superformHandler}
                            superformAction={superformAction} />
                        break;
                    default: // input
                        content = <Input 
                            {...el.props} 
                            onChange={dispatch} 
                            parentForm={id} 
                            formRules={formRules} 
                            superform={superform} 
                            onSuperChange={superformHandler}
                            superformAction={superformAction} />
                }

                return <div key={`${id}-${el}-${index}`} className={cssClasses}>{content}</div>
            })}
        </form>
    )
}

export default Form;