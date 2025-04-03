import { useState } from 'react';

import Selector from "./Selector";
import Button from "./Button";

const destinations = ['Earth - America', 'Earth - Europe', 'Earth - Asia', 
    'Celestia station', 'Moon', 'Mars', 'Venus', 'Ceres', 'Titan']

function FlightSearch() {
    const [searchScope, setSearchScope] = useState('round trip');

    function handleSearchScoping(newScope) {
        setSearchScope(newScope);
    }

    return (
        <form className="flightsearch">
            <Selector
                type=""
                identifier="Voyage Type"
                initialValue="🔄 Round trip"
                choiceOptions={['round trip', 'one-way']}
                tooling={handleSearchScoping}
            />
            <Selector
                type="regular"
                identifier="Origin"
                initialValue={destinations[1]}
                choiceOptions={destinations} 
            />
            <Selector
                type="regular"
                identifier="Destination"
                initialValue={destinations[5]}
                choiceOptions={destinations} 
            />
            <Selector 
                type="date"
                identifier="Departure Date"
                initialValue="29/05/2125" 
            />
            <Selector
                type="date"
                identifier="Return Date"
                initialValue="?"
                cssModifier={searchScope === 'one-way' ? 'disabled': null}
            />
            <Selector
                type="quantity"
                identifier="Passengers"
                initialValue="1 being" 
            />
            
            <Button type="secondary" text="search" />
        </form>
    )
}

export default FlightSearch;