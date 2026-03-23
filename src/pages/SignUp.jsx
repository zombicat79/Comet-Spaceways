import { useState, useEffect } from 'react';
import useAccount from '../hooks/useAccount';

import ContentSection from './../layout/ContentSection';
import Avatar from '../components/Avatar';
import Form from '../components/forms/Form';
import Badge from '../components/Badge';

import * as signupFormConfig from '../data/form-configs/signup-form-config';
import { completionChecker } from '../components/forms/error-checker';
import footerBadge from '/logos/ctsw-logo_dark_badge.png';

function SignUp() {
    const [formAvailability, setFormAvailability] = useState('unavailable');
    const { accountState, accountDispatcher } = useAccount();
    const [passengerForms, setPassengerForms] = useState([]);
    const [progressDisabled, setProgressDisabled] = useState(true);
    console.log(accountState)

    function addPassengerForm(form) {
        setPassengerForms((curr) => [...curr, form]);
    }

    useEffect(() => {
        accountState.race !== 'n/a' ? setFormAvailability('available') : setFormAvailability('unavailable');
    }, [accountState])

    useEffect(() => {
        let superformCompletion = 'ok';
        for (let i=0; i < passengerForms.length; i++) {
            switch (true) {
                case passengerForms[i].id.includes('race'):
                    superformCompletion = completionChecker(passengerForms[i], signupFormConfig.raceRules);
                    break;
                case passengerForms[i].id.includes('humanoid'):
                    superformCompletion = completionChecker(passengerForms[i], signupFormConfig.humanoidFormRules);
                    break;
                case passengerForms[i].id.includes('nhe'):
                    superformCompletion = completionChecker(passengerForms[i], signupFormConfig.nheFormRules);
                    break;
                default: // credentials
                    superformCompletion = completionChecker(passengerForms[i], signupFormConfig.credentialsFormRules);
            }
            if (superformCompletion === 'ko') break;
        }
        console.log(superformCompletion)
        superformCompletion === 'ok' ? setProgressDisabled(false) : setProgressDisabled(true);
    }, [accountState, passengerForms])

    return (
        <main className="signup">
            <div className="signup__heading">
                <h2>BECOME A SPACEFARER 👨‍🚀</h2>
                <p>Sign up for <span>Comet Spaceways'</span> interplanetary travel scheme and brace for a new life full of wonders, excitement and adventure!</p>
            </div>

            <ContentSection>
                <div className="content-section__tab content-section__tab--r10">Your new account</div>

                <h3 className={`signup__subtitle signup__subtitle--available`}>What are you?</h3>
                <div>
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
                        onFormAdd={addPassengerForm}
                    />
                    <Avatar character={accountState.race} />
                </div>
                <h3 className={`signup__subtitle signup__subtitle--${formAvailability}`}>Who are you?</h3>
                {accountState.race === 'humanoid' || accountState.race === 'n/a'
                ? <Form 
                    id="signup-humanoid-specific-form" 
                    display={"grid"}
                    availability={formAvailability}
                    formFields={signupFormConfig.humanoidFormFields} 
                    defaultValues={signupFormConfig.humanoidFormDefaultValues} 
                    formRules={signupFormConfig.humanoidFormRules}
                    superform={true} 
                    superformHandler={accountDispatcher}
                    superformAction={"account/modifyField"}
                    superformState={accountState}
                    onFormAdd={addPassengerForm}
                />
                : <Form 
                    id="signup-nhe-specific-form" 
                    display={"grid"}
                    availability={formAvailability}
                    formFields={signupFormConfig.nheFormFields} 
                    defaultValues={signupFormConfig.nheFormDefaultValues} 
                    formRules={signupFormConfig.nheFormRules}
                    superform={true} 
                    superformHandler={accountDispatcher}
                    superformAction={"account/modifyField"}
                    superformState={accountState}
                    onFormAdd={addPassengerForm}
                />
                }
                <h3 className={`signup__subtitle signup__subtitle--${formAvailability}`}>What are your credentials?</h3>
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
                    onFormAdd={addPassengerForm}
                />
            </ContentSection>
            
            <div className={`signup__badge signup__badge--${progressDisabled ? 'disabled' : 'enabled'}`}>
                <Badge imgSrc={footerBadge} />
            </div>
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