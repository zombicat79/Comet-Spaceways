import { useState, useContext } from 'react';

import { FlightSearchContext } from '../contexts/FlightSearchContext';

import Selector from "./Selector";
import Button from "./Button";

const destinations = ['Earth - America', 'Earth - Europe', 'Earth - Asia', 
    'Celestia station', 'Moon', 'Mars', 'Venus', 'Ceres', 'Titan']

function FlightSearch() {
    const { searchScope, handleSearchScoping } = useContext(FlightSearchContext);

    return (
        <form className="flightsearch">
            <Selector
                type="regular"
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
                initialValue="1 humanoid"
                choiceOptions={[
                    {category: 'humanoids', description: 'Humans, cyborgs or androids'},
                    {category: 'NHEs', description: 'Non-antropomorphic robots & AIs'},
                    {category: 'Pets', description: 'Organic or synthetic pets'}
                ]} 
            />

            <Button type="secondary" text="search" />
        </form>
    )
}

export default FlightSearch;