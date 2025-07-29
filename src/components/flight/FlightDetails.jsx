import FlightRouting from "./FlightRouting";
import Button from './../Button';

function FlightDetails() {
    return (
        <div className="flight-details flight-details--selected">
            <figure className="flight-details__operator">
                <img src="./../logos/ctsw-logo_dark_badge.png" alt="Comet Spaceways badge" />
            </figure>
            <FlightRouting />
            <div className="flight-details__selector">
                <Button type="secondary" text="Select" />
                <p className="flight-details__price">1138,78€</p>
            </div>
        </div>
    )
}

export default FlightDetails;