import { useState, useEffect, useContext } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';
import { minimizeDestinations } from "../../utilities/utils";

import Loader from '../Loader';

function FlightPreview({ state }) {
    const { layoutState } = useContext(LayoutContext);
    const { origin, destination, departureDate, returnDate, passengers } = state;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let randomDelay = (Math.random() * 10000).toFixed(0);
        if (randomDelay < 3000 || randomDelay > 5000) {
            randomDelay = 3000;
        }

        setTimeout(() => setIsLoading(!isLoading), randomDelay);
    }, [])

    return (
        <article className="flight-preview">
            {isLoading 
            ? <Loader />
            : 
            <>
                {layoutState.viewportWidth > 600 &&
                <header className="flight-preview__header">
                    <h3 className="flight-preview__title"> 🛸🪐 Your space travel preview:</h3>
                </header>
                }
                <main className="flight-preview__body">
                    {layoutState.viewportWidth <= 600 && <h3 className="flight-preview__title"> 🛸🪐<br/>Your space travel preview:</h3>}
                    <div className='flight-preview__routing-container'>
                        {returnDate
                        ? <p className="flight-preview__routing">{minimizeDestinations(origin)} &harr; {minimizeDestinations(destination)}</p>
                        : <p className="flight-preview__routing">{minimizeDestinations(origin)} &rarr; {minimizeDestinations(destination)}</p>
                        }
                        <div className="container--between">
                            <p className="flight-preview__routing--detail">{origin}</p>
                            <p className="flight-preview__routing--detail">{destination}</p>
                        </div>
                    </div>

                    <div className="flight-preview__date-container">
                        <p className="flight-preview__date"><span>Departure:</span> {departureDate.toLocaleString('en-US', {dateStyle: 'long'})}</p>
                        {returnDate && <p className="flight-preview__date"><span>Return:</span> {returnDate.toLocaleString('en-US', {dateStyle: 'long'})}</p>}
                    </div>

                    <div className="flight-preview__payload-container">
                        <p className="flight-preview__payload">
                            <span>Passengers: </span> 
                            {passengers.humanoids === 1 && <span>{passengers.humanoids} humanoid; </span>}
                            {passengers.humanoids > 1 && <span>{passengers.humanoids} humanoids; </span>}
                            {passengers.nhes === 1 && <span>{passengers.nhes} NHE; </span>}
                            {passengers.nhes > 1 && <span>{passengers.nhes} NHEs; </span>}
                            {passengers.minors === 1 && <span>{passengers.minors} minor; </span>}
                            {passengers.minors > 1 && <span>{passengers.minors} minors; </span>}
                            {passengers.pets === 1 && <span>{passengers.pets} pet; </span>}
                            {passengers.pets > 1 && <span>{passengers.pets} pets; </span>}
                        </p>
                    </div>

                    <img className='flight-preview__badge' src="/logos/ctsw-logo_dark_badge.png" alt='Comet Spaceways badge' />
                    <blockquote className="flight-preview__motto">Go conquer the universe</blockquote>
                </main>
            </>
            }
        </article>
    )
}

export default FlightPreview;