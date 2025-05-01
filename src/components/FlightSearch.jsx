import { useContext } from 'react';

import { FlightSearchContext } from '../contexts/FlightSearchContext';

import Selector from "./Selector";
import Button from "./Button";

function FlightSearch() {
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext);
    const { humanoids, nhes, minors, pets } = flightSearchState.passengers;

    function handleReverseChoice() {
        changeFlightSearchState({ 
            type: 'route-reverse', 
            payload: {
                reversedOrigin: flightSearchState.destination, 
                reversedDestination: flightSearchState.origin
            }
        });
    }

    function buildPassengerSelectionString() {
        let string = '';

        if (!humanoids && !nhes && !minors && !pets) {
            string = 'none selected';
        } else {
            humanoids > 1 ? string = string + humanoids + ' humanoids, ' : humanoids === 1 ? string = string + humanoids + ' humanoid, ' : string = string;
            nhes > 1 ? string = string + nhes + ' NHEs, ' : nhes === 1 ? string = string + nhes + ' NHE, ' : string = string;
            minors > 1 ? string = string + minors + ' minors, ' : minors === 1 ? string = string + minors + ' minor, ' : string = string;
            pets > 1 ? string = string + pets + ' pets, ' : pets === 1 ? string = string + pets + ' pet, ' : string = string;
        }

        return string.replace(/,\s$/g, '');
    }

    return (
        <form className="flightsearch">
            <input id="origin" type="hidden" value={flightSearchState.origin.toLowerCase()} />
            <input id="destination" type="hidden" value={flightSearchState.destination.toLowerCase()} />
            <input id="departure-date" type="hidden" value="TBA" />
            <input id="return-date" type="hidden" value="TBA" />
            <input id="passengers" type="hidden" value="TBA" />

            <Selector
                type="regular"
                identifier="Voyage-Type"
                initialValue={flightSearchState.searchScope}
                choiceOptions={['round trip', 'one-way']}
            />
            <div className="flightsearch__grouping">
                <Selector
                    type="regular"
                    identifier="Origin"
                    initialValue={flightSearchState.origin}
                    choiceOptions={flightSearchState.destinationOffer}
                />
                <svg onClick={handleReverseChoice} className="flightsearch__icon flightsearch__icon--reversal" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill="#494c4e" d="M17.6,4.2l-4-3a1,1,0,0,0-1.05-.09A.977.977,0,0,0,12,2V4H1A1,1,0,0,0,1,6H12V8a.988.988,0,0,0,.55.89A.99.99,0,0,0,13.6,8.8l4-3a1,1,0,0,0,0-1.6Z"></path>
                        <path fill="#494c4e" d="M.4,12.2l4-3a1,1,0,0,1,1.05-.09A.977.977,0,0,1,6,10v2H17a1,1,0,0,1,0,2H6v2a.988.988,0,0,1-.55.89A.99.99,0,0,1,4.4,16.8l-4-3a1,1,0,0,1,0-1.6Z"></path>
                    </g>
                </svg>
                <Selector
                    type="regular"
                    identifier="Destination"
                    initialValue={flightSearchState.destination}
                    choiceOptions={flightSearchState.destinationOffer} 
                />
            </div>
            <Selector 
                type="date"
                identifier="Departure-Date"
                initialValue={flightSearchState.departureDate}
            />
            <Selector
                type="date"
                identifier="Return-Date"
                initialValue={flightSearchState.returnDate}
                cssModifier={flightSearchState.searchScope === '➡️ One-Way' ? 'disabled' : null}
            />
            <Selector
                type="quantity"
                identifier="Passengers"
                initialValue={buildPassengerSelectionString()}
                choiceOptions={[
                    {category: 'humanoids', description: 'Adult humans, cyborgs or androids'},
                    {category: 'NHEs', description: 'Non-antropomorphic robots & AIs'},
                    {category: 'minors', description: 'Organic or synthetic children'},
                    {category: 'pets', description: 'Organic or synthetic animals'}
                ]}
                cssModifier={(!humanoids && !nhes && !minors && !pets) ? 'error' : null}
            />

            <Button type="secondary" text="search" onClick="TBA" />
        </form>
    )
}

export default FlightSearch;