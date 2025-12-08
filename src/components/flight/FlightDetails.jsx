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

    function addToCart() {
        itemDetails.type === 'outbound'
            ? dispatch({ type: "cart/addOutbound", payload: itemDetails })
            : dispatch({ type: "cart/addInbound", payload: itemDetails });
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
                <p className="flight-details__price">{itemDetails.price}€</p>
            </div>
        </div>
    )
}

export default FlightDetails;