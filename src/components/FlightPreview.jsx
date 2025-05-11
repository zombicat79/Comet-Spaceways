import { minimizeDestinations } from "../utilities/utils";

function FlightPreview({ state }) {
    const { origin, destination, departureDate, returnDate, passengers } = state;

    return (
        <div className="flight-preview">
            <header className="flight-preview__header">

            </header>
            <main className="flight-preview__body">
                <p className="flight-preview__routing">{minimizeDestinations(origin)} - {minimizeDestinations(destination)}</p>
            </main>
        </div>
        /* <ul>
            <li>Origin: {origin}</li>
            <li>Destination: {destination}</li>
            <li>Departure date: {departureDate.toLocaleString('es-ES', {dateStyle: 'short'})}</li>
            {returnDate && <li>Return date: {returnDate.toLocaleString('es-ES', {dateStyle: 'short'})}</li>}
            <li>
                Passengers: 
                <ul>
                    {passengers.humanoids === 1 && <li>{passengers.humanoids} humanoid</li>}
                    {passengers.humanoids > 1 && <li>{passengers.humanoids} humanoids</li>}
                    {passengers.nhes === 1 && <li>{passengers.nhe} NHE</li>}
                    {passengers.nhes > 1 && <li>{passengers.nhes} NHEs</li>}
                    {passengers.minors === 1 && <li>{passengers.minors} minor</li>}
                    {passengers.minors > 1 && <li>{passengers.minors} minors</li>}
                    {passengers.pets === 1 && <li>{passengers.pets} pet</li>}
                    {passengers.pets > 1 && <li>{passengers.pets} pets</li>}
                </ul>
            </li>
        </ul> */
    )
}

export default FlightPreview;