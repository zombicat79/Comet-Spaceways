import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router';
import { LayoutContext } from '../../../contexts/LayoutContext'; 
import useAccount from '../../../hooks/useAccount';

import FlashOffer from '../../../shared/components/presentation/FlashOffer';
import ContentSection from '../../../layout/ContentSection';
import Avatar from '../components/Avatar';
import Form from '../../../components/forms/Form';
import Badge from '../../../shared/components/presentation/Badge';
import Loader from '../../../shared/components/navigation/Loader';

import * as signupFormConfig from '../../../data/form-configs/signup-form-config';
import { completionChecker } from '../../../components/forms/error-checker';
import User from '../../../data/user-data-model';
import errors from '../../../components/modalpieces/errorTypes';
import { createUserAccount } from '../../../services/userService';

import footerBadge from '/logos/ctsw-logo_dark_badge.png';

function SignUp() {
    const [formAvailability, setFormAvailability] = useState('unavailable');
    const { accountState, accountDispatcher } = useAccount();
    const [passengerForms, setPassengerForms] = useState([]);
    const [progressDisabled, setProgressDisabled] = useState(true);
    const { handlePopupLaunch } = useContext(LayoutContext);
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: () => handleUserCreation(),
        // UNCOMMENT AND ACTIVATE ONCE 'PROFILE-PAGE' IS AVAILABLE !!!
        /* onSuccess: (data) => {
            navigate(`/user-profile?id=${data.id}&newUser=true`);
        }, */
        onSuccess: () => handlePopupLaunch({ 
            modalClass: 'generic', 
            content: 'work-in-progress',
            props: { customContent: errors.processInterruption } 
        }),
        onError: () => handlePopupLaunch({ 
            modalClass: 'generic', 
            content: 'error-notice',
            props: { error: errors.signupError } 
        })
    });

    function addPassengerForm(form) {
        setPassengerForms((curr) => [...curr, form]);
    }

    function determineCharacter() {
        if (accountState.race === 'humanoid') {
            let build = 'organic';
            let gender = 'male';
            build = accountState.build === null ? 'organic' : accountState.build;
            gender = accountState.gender === null ? 'male' : accountState.gender;
            return `${build}-${gender}`;
        }
        return accountState.race;
    }

    async function handleUserCreation() {
        const newUser = new User(accountState);
        if (accountState.race !== 'humanoid') {
            newUser.addRaceFeatures();
            newUser.addOriginFeatures();
        } else {
            newUser.addBuildFeatures();
            newUser.addGenderFeatures();
            newUser.addNationalityFeatures();
        }
        newUser.addJobFeatures();
        return createUserAccount(newUser);
    }

    useEffect(() => {
        accountState.race !== '_____' ? setFormAvailability('available') : setFormAvailability('unavailable');
    }, [accountState.race])

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
        superformCompletion === 'ok' ? setProgressDisabled(false) : setProgressDisabled(true);
    }, [accountState, passengerForms])

    return (
        <main className="signup">
            <div className="signup__heading">
                <h2>BECOME A SPACEFARER 👨‍🚀</h2>
                <p>Sign up for <span>Comet Spaceways'</span> interplanetary travel scheme and brace for a new life full of wonders, excitement and adventure!</p>
            </div>
            <FlashOffer width={20} text='Get $50 AU for free!' textAngle={340} />

            <ContentSection bodyModifiers={isPending ? ['disabled'] : null} >
                {isPending && <Loader spinner='spinner_dark' />}
                <div className="content-section__tab content-section__tab--r10">Your new account</div>

                <h3 className={`signup__subtitle signup__subtitle--available`}>What are you?</h3>
                <div className='signup__block'>
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
                    {(accountState.race !== "_____" && accountState.race !== 'humanoid') && 
                        <Link to={{
                            pathname: "/nhes",
                            search: `?race=${accountState.race}`,
                          }} target='_blank' rel="noreferrer">
                            Need more details about this race?
                        </Link>
                    }

                    <Avatar character={determineCharacter()} />
                </div>
                <h3 className={`signup__subtitle signup__subtitle--${formAvailability}`}>Who are you?</h3>
                {accountState.race === 'humanoid' || accountState.race === '_____'
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
            
            <div 
                className={`signup__badge signup__badge--${progressDisabled ? 'disabled' : 'enabled'}`}
                onClick={mutate}
            >
                <Badge imgSrc={footerBadge} />
            </div>
        </main>
    )
}

export default SignUp;