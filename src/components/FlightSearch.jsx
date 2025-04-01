import Selector from "./Selector";
import Button from "./Button";

function FlightSearch() {
    return (
        <form className="flightsearch">
            <div className="flightsearch__input">Round trip</div>
            <Selector 
                identifier="Origin"
                currentValue="Earth" 
            />
            <Selector 
                identifier="Destination"
                currentValue="Mars" 
            />
            <div className="flightsearch__input">Departure Date</div>
            <div className="flightsearch__input">Return Date</div>
            <Button type="secondary" text="search" />
        </form>
    )
}

export default FlightSearch;