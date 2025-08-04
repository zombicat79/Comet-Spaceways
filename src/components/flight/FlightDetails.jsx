import { useContext } from 'react';
import { LayoutContext } from './../../contexts/LayoutContext';

import FlightRouting from "./FlightRouting";
import Button from './../Button';

import darkBadge from '/logos/ctsw-logo_dark_badge.png';

function FlightDetails({ itemDetails, onSelect, selected }) {
    const { layoutState } = useContext(LayoutContext);

    let detailClasses = 'flight-details';
    if (selected) {
        detailClasses += ' flight-details--selected';
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
                <div onClick={selected ? () => onSelect(null) : () => onSelect(itemDetails)}>
                    <Button type="secondary" text={selected ? 'Discard' : 'Select'} />
                </div>
                <p className="flight-details__price">1138,78€</p>
            </div>
        </div>
    )
}

export default FlightDetails;