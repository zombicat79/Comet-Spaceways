import { useEffect, useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { useLocation } from 'react-router';

import Banner from './../../components/Banner';
import ContentSection from './../../layout/ContentSection';
import FlightSearch from '../../components/flight/FlightSearch';

import { maximizeDestinations } from '../../utilities/utils';

function DestinationDetail() {
    const { destinations } = useContext(DestinationsContext);
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext);
    const location = useLocation();
    const [currentDestination] = location.pathname.match(/(?<=\/)[A-Z]{3}$/);
    const currentDestinationData = destinations.find((el) => el.port === currentDestination);
    console.log(currentDestinationData)

    useEffect(() => {
        if (flightSearchState.origin === maximizeDestinations(currentDestination)) {
            changeFlightSearchState({ type: 'origin-change', payload: "TBD" });
        }
        changeFlightSearchState({ type: 'destination-change', payload: maximizeDestinations(currentDestination) });
    }, [])

    if (destinations.length > 0) {
        return (
            <main>
                <Banner 
                    textStyle={{ color: 'default', align: 'left' }}
                    textContent={{
                        heading: `${currentDestinationData.full_name} - (${currentDestinationData.port})`,
                        body: currentDestinationData.alias
                    }}
                    background={{ img: currentDestinationData.port, height: 'full' }}
                />
                <section></section>
                <ContentSection>Test, test, test</ContentSection>
                <section>
                    <FlightSearch fixedDestination={true} />
                </section>
            </main>
        )
    }

    return null;
}

export default DestinationDetail;