import { useState, useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { LayoutContext } from '../../contexts/LayoutContext';

import Form from "../forms/Form";
import Button from "../Button";
import InfoPanel from "../InfoPanel";

import * as formConfig from './../../data/form-configs/account-form-config';
import { updateUserAccount } from '../../services/userService';

function AccountEdit({ props }) {
    const { dispatch } = useContext(LayoutContext);
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const accountEditFields = `${props.targetAccountProp}FormFields`;
    const accountEditDefaults = `${props.targetAccountProp}FormDefaultValues`;
    const accountEditFormRules = `${props.targetAccountProp}FormRules`;

    const { mutate, isPending } = useMutation({
        mutationFn: () => updateUserAccount(),
        onSuccess: () => {
            closeModal();
            // navigate(`/user-profile?id=${data.id}&newUser=true`);
        },
        onError: () => {
            setErrorMsg('Test message')
        }
    });

    function handleCompletion(completionCheck) {
        if (completionCheck === 'ok') setIsFormCompleted(true);
        if (completionCheck === 'ko') setIsFormCompleted(false);
    }

    function handleSubmit() {
        mutate();
    }

    function closeModal() {
        dispatch({ type: 'toggle/modal' });
        setTimeout(() => {
            dispatch({ type: 'set/scroll', payload: true });
            dispatch({ type: 'fill/modal', payload: { content: null, props: {} }})
        }, 1000);
    }

    return (
        <main className="modalpiece">
            <article className="modalpiece__content">
                <h3 className="modalpiece__heading">Change your {props.targetAccountProp}:</h3>
                <p>Current username: {props.currentValue}</p>
                <Form 
                    id={`edit-${props.targetAccountProp}-form`}
                    display="flex-column"
                    formFields={formConfig[accountEditFields]} 
                    defaultValues={formConfig[accountEditDefaults]} 
                    formRules={formConfig[accountEditFormRules]}
                    onFormCheck={handleCompletion}
                />
                <Button type="primary" action={handleSubmit} text="Proceed" isDisabled={!isFormCompleted} />
                {errorMsg !== '' && <InfoPanel type="alert">{errorMsg}</InfoPanel>}
            </article>
        </main>
    )
}

export default AccountEdit;