import { useState, useContext } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { LayoutContext } from '../../contexts/LayoutContext';

import Form from "../forms/Form";
import Button from "../Button";

import * as formConfig from './../../data/form-configs/account-form-config';
import { updateUserAccount } from '../../services/userService';

function AccountEdit({ props }) {
    const { dispatch } = useContext(LayoutContext);
    const queryClient = useQueryClient();
    const [updateData, setUpdateData] = useState({});
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const accountEditFields = `${props.targetAccountProp}FormFields`;
    const accountEditDefaults = `${props.targetAccountProp}FormDefaultValues`;
    const accountEditFormRules = `${props.targetAccountProp}FormRules`;

    const { mutate, isPending } = useMutation({
        mutationFn: () => updateUserAccount(props.userId, updateData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['active-user'], exact: false, refetchType: 'active' });
            closeModal();
            setTimeout(() => {
                toast.success(<p>Your {props.targetAccountProp} has been successfully changed from <strong>{props.currentValue}</strong> to <strong>{updateData[props.targetAccountProp]}</strong></p>);
            }, 2000);
        },
        onError: () => {
            closeModal();
            setTimeout(() => {
                toast.error(<p>A problem occured while attempting to change your <strong>{props.targetAccountProp}</strong>. Please try again later</p>);
            }, 2000);
        }
    });

    function handleFormData(formData) {
        const extractedData = formData[`edit-${props.targetAccountProp}-form`]
        setUpdateData(extractedData);
    }

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
                    onFormChange={handleFormData}
                    onFormCheck={handleCompletion}
                />
                <Button type="primary" action={handleSubmit} text="Proceed" isDisabled={!isFormCompleted} />
            </article>
        </main>
    )
}

export default AccountEdit;