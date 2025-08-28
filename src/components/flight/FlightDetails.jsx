import { useContext } from 'react';
import { LayoutContext } from './../../contexts/LayoutContext';
import { CartContext } from '../../contexts/CartContext'; 

import FlightRouting from "./FlightRouting";
import Button from './../Button';

import darkBadge from '/logos/ctsw-logo_dark_badge.png';

function FlightDetails({ itemDetails, onSelect, selected }) {
    const { layoutState } = useContext(LayoutContext);
    const { cartDispatcher: dispatch } = useContext(CartContext);

    let detailClasses = 'flight-details';
    if (selected) {
        detailClasses += ' flight-details--selected';
    }

    // FAKE FLIGHT DATA -- Remove once real data is ready to be fed
    const fakeOutboundDetails = {
        type: 'outbound',
        origin: 'Earth (Europe)',
        destination: 'Mars',
        departureDate: "03/05/2125",
        departureTime: "14:32h",
        arrivalDate: "10/06/2125",
        arrivalTime: "08:15h",
        mode: 'direct',
        price: 347.25,
    }

    const fakeInboundDetails = {
        type: 'inbound',
        origin: 'Mars',
        destination: 'Earth (Europe)',
        departureDate: "11/07/2125",
        departureTime: "08:15h",
        arrivalDate: "13/08/2125",
        arrivalTime: "19:24h",
        mode: 'stopover',
        price: 412.08
    }
    // -- END OF WARNING --

    function addToCart() {
        itemDetails.type === 'outbound'
            ? dispatch({ type: "cart/addOutbound", payload: fakeOutboundDetails })
            : dispatch({ type: "cart/addInbound", payload: fakeInboundDetails });
    }

    function removeFromCart() {
        itemDetails.type === 'outbound'
            ? dispatch({ type: "cart/removeOutbound" })
            : dispatch({ type: "cart/removeInbound" });
    }
    
    return (
        <div className={detailClasses}>
            {layoutState.viewportWidth > 1000 &&
            <figure className="flight-details__operator">
                <img src={darkBadge} alt="Comet Spaceways badge" />
            </figure>
            }   
            <FlightRouting routingDetails={itemDetails}  />
            <div className="flight-details__selector">
                <div onClick={() => {
                    selected ? onSelect(null) : onSelect(itemDetails);
                    selected ? removeFromCart() : addToCart();
                }}>
                    <Button type="secondary" text={selected ? 'Discard' : 'Select'} />
                </div>
                <p className="flight-details__price">1138,78€</p>
            </div>
        </div>
    )
}

export default FlightDetails;