import { useContext } from 'react';

import { FlightSearchContext } from '../contexts/FlightSearchContext';

import Selector from "./Selector";
import Button from "./Button";

function FlightSearch() {
    const { flightSearchState } = useContext(FlightSearchContext);

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
            <Selector
                type="regular"
                identifier="Origin"
                initialValue={flightSearchState.origin}
                choiceOptions={flightSearchState.destinationOffer} 
            />
            <Selector
                type="regular"
                identifier="Destination"
                initialValue={flightSearchState.destination}
                choiceOptions={flightSearchState.destinationOffer} 
            />
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
                initialValue="1 humanoid"
                choiceOptions={[
                    {category: 'humanoids', description: 'Adult humans, cyborgs or androids'},
                    {category: 'NHEs', description: 'Non-antropomorphic robots & AIs'},
                    {category: 'minors', description: 'Organic or synthetic children'},
                    {category: 'pets', description: 'Organic or synthetic animals'}
                ]} 
            />

            <Button type="secondary" text="search" onClick="TBA" />
        </form>
    )
}

export default FlightSearch;