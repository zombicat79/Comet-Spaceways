import { useState, useContext } from 'react';

import Form from "../forms/Form";
import Button from "../Button";
import InfoPanel from "../InfoPanel";

import * as formConfig from './../../data/form-configs/account-form-config';

function AccountEdit({ props }) {
    const [errorMsg, setErrorMsg] = useState('');
    const accountEditDomain = `${props.targetAccountProp}FormFields`;

    function handleChange() {

    }

    console.log(props)

    return (
        <main className="modalpiece">
            <article className="modalpiece__content">
                <h3 className="modalpiece__heading">Identify yourself, spacefarer!</h3>
                <Form 
                    id="login-form"
                    display="flex-column"
                    formFields={formConfig[accountEditDomain]} 
                    defaultValues={formConfig[accountEditDomain]} 
                    formRules={formConfig[accountEditDomain]}
                />
                <Button type="primary" action={handleChange} text="Proceed" />
                {errorMsg !== '' && <InfoPanel type="alert">{errorMsg}</InfoPanel>}
            </article>
        </main>
    )
}

export default AccountEdit;