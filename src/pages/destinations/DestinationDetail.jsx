import { useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';
import { useLocation } from 'react-router';

import Banner from './../../components/Banner';
import ContentSection from './../../layout/ContentSection';
import FlightSearch from '../../components/flight/FlightSearch';

function DestinationDetail() {
    const { destinations } = useContext(DestinationsContext);
    const location = useLocation();
    const [currentDestination] = location.pathname.match(/(?<=\/)[A-Z]{3}$/);
    const currentDestinationData = destinations.find((el) => el.port === currentDestination);
    console.log(currentDestinationData)

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
            <section>
                <FlightSearch fixedDestination={true} />
            </section>
        </main>
    )
}

export default DestinationDetail;