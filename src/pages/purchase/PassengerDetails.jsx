import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';

import { LayoutContext } from '../../contexts/LayoutContext';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { CartContext } from '../../contexts/CartContext';

import PassengerSegment from '../../components/passengers/PassengerSegment';
import PageRibbon from '../../components/PageRibbon';
import Button from '../../components/Button';

import { completionChecker } from '../../components/forms/error-checker';
import * as formConfig from './../../components/passengers/passenger-form-config';

function PassengerDetails() {
    const { flightSearchState } = useContext(FlightSearchContext);
    const { cartState } = useContext(CartContext);
    const [passengerForms, setPassengerForms] = useState([]);
    const [progressDisabled, setProgressDisabled] = useState(true);
    const navigate = useNavigate();

    function addPassengerForm(form) {
        setPassengerForms((curr) => [...curr, form]);
    }

    useEffect(() => {
        let superformCompletion = 'ok';
        for (let i=0; i < passengerForms.length; i++) {
            switch (true) {
                case passengerForms[i].id.includes('nhe'):
                    superformCompletion = completionChecker(passengerForms[i], formConfig.nheFormRules);
                    break;
                case passengerForms[i].id.includes('minor'):
                    superformCompletion = completionChecker(passengerForms[i], formConfig.minorFormRules);
                    break;
                case passengerForms[i].id.includes('pet'):
                    superformCompletion = completionChecker(passengerForms[i], formConfig.petFormRules);
                    break;
                default: // humanoid
                    superformCompletion = completionChecker(passengerForms[i], formConfig.humanoidFormRules);
            }
            if (superformCompletion === 'ko') break;
        }
        superformCompletion === 'ok' ? setProgressDisabled(false) : setProgressDisabled(true);
    }, [cartState, passengerForms])

    return (
        <main className="passenger-details">
            {flightSearchState.passengers.humanoids > 0 && <PassengerSegment type="humanoid" onFormAdd={addPassengerForm} />}
            {flightSearchState.passengers.minors > 0 && <PassengerSegment type="minor" onFormAdd={addPassengerForm} />}
            {flightSearchState.passengers.nhes > 0 && <PassengerSegment type="nhe" onFormAdd={addPassengerForm} />}
            {flightSearchState.passengers.pets > 0 && <PassengerSegment type="pet" onFormAdd={addPassengerForm} />}

            <PageRibbon>
                <Button type="primary" action={() => navigate("/purchase/allocation")} text="proceed with purchase 🚀" isDisabled={progressDisabled} />
            </PageRibbon>
        </main>
    )
}

export default PassengerDetails;