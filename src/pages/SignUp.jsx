import { useState, useEffect } from 'react';
import useAccount from '../hooks/useAccount';

import ContentSection from './../layout/ContentSection';
import Form from '../components/forms/Form';

import * as signupFormConfig from '../data/form-configs/signup-form-config';

function SignUp() {
    const [formAvailability, setFormAvailability] = useState('unavailable');
    const { accountState, accountDispatcher } = useAccount();

    useEffect(() => {
        accountState.race !== 'n/a' ? setFormAvailability('available') : setFormAvailability('unavailable');
    }, [accountState])

    return (
        <main className="signup">
            <ContentSection>
                <div className="content-section__tab content-section__tab--r20">New account</div>

                <h3 className={`signup__heading signup__heading--available`}>What are you?</h3>
                <Form 
                    id="signup-race-form" 
                    display={"grid"}
                    availability={"available"}
                    formFields={signupFormConfig.raceFields} 
                    defaultValues={signupFormConfig.raceDefaultValues} 
                    formRules={signupFormConfig.raceRules}
                    superform={true} 
                    superformHandler={accountDispatcher}
                    superformAction={"account/modifyField"}
                    superformState={accountState} 
                />
                <h3 className={`signup__heading signup__heading--${formAvailability}`}>Who are you?</h3>
                {accountState.race === 'humanoid' || accountState.race === 'n/a'
                ? <Form 
                    id="signup-specific-form" 
                    display={"grid"}
                    availability={formAvailability}
                    formFields={signupFormConfig.humanoidFormFields} 
                    defaultValues={signupFormConfig.humanoidFormDefaultValues} 
                    formRules={signupFormConfig.humanoidFormRules}
                    superform={true} 
                    superformHandler={accountDispatcher}
                    superformAction={"account/modifyField"}
                    superformState={accountState}
                />
                : <Form 
                    id="signup-specific-form" 
                    display={"grid"}
                    availability={formAvailability}
                    formFields={signupFormConfig.nheFormFields} 
                    defaultValues={signupFormConfig.nheFormDefaultValues} 
                    formRules={signupFormConfig.nheFormRules}
                    superform={true} 
                    superformHandler={accountDispatcher}
                    superformAction={"account/modifyField"}
                    superformState={accountState}
                />
                }
                <h3 className={`signup__heading signup__heading--${formAvailability}`}>What are your credentials?</h3>
                <Form 
                    id="signup-credentials-form" 
                    display={"grid"}
                    availability={formAvailability}
                    formFields={signupFormConfig.credentialsFormFields} 
                    defaultValues={signupFormConfig.credentialsFormDefaultValues} 
                    formRules={signupFormConfig.credentialsFormRules}
                    superform={true} 
                    superformHandler={accountDispatcher}
                    superformAction={"account/modifyField"}
                    superformState={accountState} 
                />
            </ContentSection>
        </main>
    )
}

export default SignUp;

/*

superform={true} 
superformHandler={cartDispatcher}
superformAction={"cart/modifyPassengers"}
superformState={cartState} 
onFormAdd={onFormAdd}

*/