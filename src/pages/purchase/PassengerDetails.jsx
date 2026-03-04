import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';

import { LayoutContext } from '../../contexts/LayoutContext';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { CartContext } from '../../contexts/CartContext';

import PassengerSegment from '../../components/passengers/PassengerSegment';
import PageRibbon from '../../components/PageRibbon';
import Button from '../../components/Button';

function PassengerDetails() {
    const { flightSearchState } = useContext(FlightSearchContext);
    const { cartState, cartDispatcher } = useContext(CartContext);
    const navigate = useNavigate();
    const proceedButtonState = cartState.passengers.length === 0;

    useEffect(() => {
        cartDispatcher({ type: 'cart/removePassengers' });
    }, [])

    return (
        <main className="passenger-details">
            {flightSearchState.passengers.humanoids > 0 && <PassengerSegment type="humanoid" />}
            {flightSearchState.passengers.minors > 0 && <PassengerSegment type="minor" />}
            {flightSearchState.passengers.nhes > 0 && <PassengerSegment type="nhe" />}
            {flightSearchState.passengers.pets > 0 && <PassengerSegment type="pet" />}

            <PageRibbon>
                <Button type="primary" action={() => navigate("/purchase/details")} text="proceed with purchase 🚀" isDisabled={proceedButtonState} />
            </PageRibbon>
        </main>
    )
}

export default PassengerDetails;